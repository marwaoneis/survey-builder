const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema({
  name: {
    usertype: String,
    required: true,
    trim: true,
  },
});

const userType = mongoose.model("userType", userTypeSchema);

module.exports = userType;
