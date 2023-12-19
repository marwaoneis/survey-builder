const express = require("express");
const cors = require("cors");
const { connectToMongoDB } = require("./configs/mongoDb.configs");
const { authMiddleware } = require("./middlewares/auth.middleware");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const surveyRoutes = require("./routes/survey.routes");
app.use("/survey", authMiddleware, surveyRoutes);

const questionRoutes = require("./routes/question.routes");
app.use("/question", authMiddleware, questionRoutes);

const questionAnswerRoutes = require("./routes/question.answer.routes");
app.use("/question-answer", authMiddleware, questionAnswerRoutes);

const userAnswerRoutes = require("./routes/user.answer.routes");
app.use("/user-answer", authMiddleware, userAnswerRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
  connectToMongoDB();
});
