// Import Model
const topic = require("../models/topics_M");

exports.topics = {
  get: async (req, res) => {
    await topic
      .find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  create: async (req, res) => {
    const topics = req.body;

    await topic
      .create(topics)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  update: async (req, res) => {
    const dataID = req.params.id;

    await topic
      .findOneAndUpdate(dataID, {
        $addToSet: {
          topic: newdata,
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

// exports.topic = async (req, res) => {
//   const method = req.method;

//   if (method === "GET") {
//     res.send("The Method is Get");
//   } else if (method === "POST") {
//     const topics = req.body;

//     await topic
//       .create(topics)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// };

// exports.services = {
//   create: () => {
//     console.log("Working Fine");
//   },
// };

// Some Best Mongoose Methods
// .findByIdAndUpdate(dataID, {
//   $push: {
//     topic: ["rahul", "Aksty", "Anmol", "Pyaaj", "Parataha"],
//   },
// })
