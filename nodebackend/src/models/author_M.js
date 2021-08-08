const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Design Schema for Author

const quotes_Schema = schema({
  quotes: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

// Quotes Schema For Author
const author_Schema = schema({
  author_name: {
    type: String,
    required: true,
  },
  author_bio: {
    about: {
      type: String,
    },
    proffession: {
      type: String,
    },
    nationality: {
      type: String,
    },
    dob: {
      type: String,
    },
  },
  author_quotes: [quotes_Schema],
});

// Define model with database name
const author_model = mongoose.model("author_model", author_Schema);

// Export Model
module.exports = author_model;
