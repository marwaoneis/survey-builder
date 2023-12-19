const userAnswer = require("../models/user.answer.model");
const surveyCompleted = require("../models/completed.model");

const addAnswers = async (req, res) => {
  if (!req.user.admin) {
    const { answers, surveyId } = req.body;
    const userId = req.user._id;
    answers.map(async (answer) => {
      const questionId = answer.questionId;
      const questionAnswerId = answer.questionAnswerId;

      await userAnswer.create({
        questionId: questionId,
        questionAnswerId: questionAnswerId,
        surveyId: surveyId,
        userId: userId,
      });
    });
    surveyCompleted.create({
      surveyId: surveyId,
      userId: userId,
    });
    res.json({ message: "Answer added successfully" });
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};

module.exports = { addAnswers };
