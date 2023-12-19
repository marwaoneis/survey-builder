const mongoose = require("mongoose");

const completedSurveySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
});

const completedSurvey = mongoose.model(
  "completedSurvey",
  completedSurveySchema
);

module.exports = completedSurvey;
