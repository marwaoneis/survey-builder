const mongoose = require("mongoose");

const surveyCompletedSchema = new mongoose.Schema({
  userId: {
    usertype: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  surveyId: {
    usertype: mongoose.Schema.Types.ObjectId,
    ref: "Survey",
    required: true,
  },
});

const surveyCompleted = mongoose.model(
  "surveyCompleted",
  surveyCompletedSchema
);

module.exports = surveyCompleted;
