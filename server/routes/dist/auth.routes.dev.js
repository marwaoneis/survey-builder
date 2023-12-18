"use strict";

var express = require("express");

var _require = require("../controllers/auth.controllers"),
    login = _require.login,
    register = _require.register;

var router = express.Router();
router.post("/login", login);
router.post("/register", register);
module.exports = router;
//# sourceMappingURL=auth.routes.dev.js.map
