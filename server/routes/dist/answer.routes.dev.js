"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/answer.controllers"),
    addQuestionAnswer = _require.addQuestionAnswer,
    deleteQuestionAnswer = _require.deleteQuestionAnswer,
    updateQuestionAnswer = _require.updateQuestionAnswer;

router.post("/", addQuestionAnswer);
router["delete"]("/:id", deleteQuestionAnswer);
router.put("/:id", updateQuestionAnswer);
module.exports = router;
//# sourceMappingURL=answer.routes.dev.js.map
