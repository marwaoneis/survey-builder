"use strict";

var mongoose = require("mongoose");

var completedSurveySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true
  }
});
var completedSurvey = mongoose.model("completedSurvey", completedSurveySchema);
module.exports = completedSurvey;
//# sourceMappingURL=completed.model.dev.js.map
