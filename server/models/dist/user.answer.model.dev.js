"use strict";

var mongoose = require("mongoose");

var userAnswerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  },
  questionAnswerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionAnswer",
    required: true
  }
});
var UserAnswer = mongoose.model("UserAnswer", userAnswerSchema);
module.exports = UserAnswer;
//# sourceMappingURL=user.answer.model.dev.js.map
