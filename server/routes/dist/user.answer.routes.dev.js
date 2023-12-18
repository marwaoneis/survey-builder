"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/user.answer.controllers"),
    addAnswers = _require.addAnswers;

router.post("/", addAnswers);
module.exports = router;
//# sourceMappingURL=user.answer.routes.dev.js.map
