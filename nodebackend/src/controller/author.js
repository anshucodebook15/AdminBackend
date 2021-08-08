// Import Model
const author_m = require("../models/author_M");

exports.author = {
  get: async (req, res) => {
    res.send(req.body);
  },

  create: async (req, res) => {
    const indata = req.body;

    // structured Auther Data
    const author_data = {
      author_name: indata.author_name,
      author_bio: {
        about: indata.author_about,
        proffession: indata.author_proffesion,
        nationality: indata.author_nationality,
        dob: indata.author_dob,
      },
    };

    // Save it to database
    await author_m
      .create(author_data)
      .then((re) => {
        console.log(re);
      })
      .then((err) => {
        console.log(err);
      });
  },

  update: async (req, res) => {},

  delete: async (req, res) => {},
};

// "author_name": "APJ Abdul Kalam",
//     "author_about" : "Former president of india",
//     "author_proffesion": "letmedoit",
//     "author_nationality": "indian",
//     "author_dob": "20-11-1943"
