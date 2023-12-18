"use strict";

var express = require("express");

var cors = require("cors");

var _require = require("./configs/mongoDb.configs"),
    connectToMongoDB = _require.connectToMongoDB;

var _require2 = require("./middlewares/auth.middleware"),
    authMiddleware = _require2.authMiddleware;

require("dotenv").config();

var app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000"
}));

var authRoutes = require("./routes/auth.routes");

app.use("/auth", authRoutes);

var surveyRoutes = require("./routes/survey.routes");

app.use("/survey", authMiddleware, surveyRoutes);

var questionRoutes = require("./routes/question.routes");

app.use("/question", authMiddleware, questionRoutes);

var answerRoutes = require("./routes/answer.routes");

app.use("/answer", authMiddleware, answerRoutes);

var userAnswerRoutes = require("./routes/user.answer.routes");

app.use("/user.answer.routes.js", authMiddleware, userAnswerRoutes);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("Server listening on PORT: ".concat(PORT));
  connectToMongoDB();
});
//# sourceMappingURL=index.dev.js.map
