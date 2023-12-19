"use strict";

var _require = require("mongoose"),
    mongoose = _require["default"];

var mogoose = require("mongoose");

var connectToMongoDB = function connectToMongoDB() {
  mogoose.connect("mongodb://localhost:27017/db_survey");
  var connection = mongoose.connection;
  connection.on("error", function (error) {
    console.log("Error connection to MongoDB: ", error);
  });
  connection.once("open", function () {
    console.log("Connected to MongoDB...");
  });
};

module.exports = {
  connectToMongoDB: connectToMongoDB
};
//# sourceMappingURL=mongoDb.configs.dev.js.map
