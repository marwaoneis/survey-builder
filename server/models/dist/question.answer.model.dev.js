"use strict";

var mongoose = require("mongoose");

var questionAnswerSchema = new mongoose.Schema({
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
    required: true
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});
var QuestionAnswer = mongoose.model("QuestionAnswer", questionAnswerSchema);
module.exports = QuestionAnswer;
//# sourceMappingURL=question.answer.model.dev.js.map
