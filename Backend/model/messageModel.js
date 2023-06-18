const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("feedback", messageSchema);