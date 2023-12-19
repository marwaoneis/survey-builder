"use strict";

var mongoose = require("mongoose");

var typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});
var Type = mongoose.model("Type", typeSchema);
module.exports = Type;
//# sourceMappingURL=user.type.model.dev.js.map
