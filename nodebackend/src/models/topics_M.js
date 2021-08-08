const mongoose = require("mongoose");
const schema = mongoose.Schema;

const topic_Schema = schema({
  topic: {
    type: Array,
    required: true,
  },
});

const topic_model = mongoose.model("topic_model", topic_Schema);

module.exports = topic_model;

// {
//   "author_name": "APJ abdul Kalam",
//   "author_bio": "i am APJ abdul kalam",
//   "dob": "26-11-1996",
//   "books": "wings of Fire",
//   "quotes": [
//       {
//           "tags": [
//               "Motivational",
//               "love",
//               "Sudhar",
//               "Rangde Bansanti"
//           ],
//           "quotes": "This is one who do it like that"
//       },
//       {
//           "tags": [
//               "Aradhya",
//               "vikas",
//               "Pankhuri"
//           ],
//           "quotes": "This is one who do it like that"
//       }
//   ]
// }
