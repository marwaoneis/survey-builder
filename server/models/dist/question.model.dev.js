"use strict";

var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true
  },
  question: {
    type: String,
    required: true,
    trim: true
  }
});
var Question = mongoose.model("Question", questionSchema);
module.exports = Question;
//# sourceMappingURL=question.model.dev.js.map
