const express = require("express");
const router = express.Router();
const { addAnswers } = require("../controllers/user.answer.controllers");

router.post("/", addAnswers);

module.exports = router;
