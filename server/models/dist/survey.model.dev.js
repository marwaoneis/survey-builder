"use strict";

var mongoose = require("mongoose");

var serveySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
var Survey = mongoose.model("Survey", serveySchema);
module.exports = Survey;
//# sourceMappingURL=survey.model.dev.js.map
