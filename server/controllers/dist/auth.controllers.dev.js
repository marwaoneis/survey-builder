"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var User = require("../models/user.model");

var jwt = require("jsonwebtoken");

var bcrypt = require("bcrypt");

var login = function login(req, res) {
  var _req$body, username, password, user, isValidPassword, _user$toJSON, hashedPassword, _id, userDetails, token;

  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;

          if (!(!username || !password)) {
            _context.next = 4;
            break;
          }

          res.status(400).send({
            message: "All fields are required"
          });
          return _context.abrupt("return");

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            username: username
          }));

        case 6:
          user = _context.sent;
          if (!user) res.status(400).send({
            message: "Invalid username/password"
          });
          _context.next = 10;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 10:
          isValidPassword = _context.sent;

          if (isValidPassword) {
            _context.next = 14;
            break;
          }

          res.status(400).send({
            message: "Invalid username/password"
          });
          return _context.abrupt("return");

        case 14:
          _user$toJSON = user.toJSON(), hashedPassword = _user$toJSON.password, _id = _user$toJSON._id, userDetails = _objectWithoutProperties(_user$toJSON, ["password", "_id"]); // generate JWT token

          token = jwt.sign(_objectSpread({}, userDetails), "MARGO", {
            expiresIn: "2 days"
          });
          res.status(200).send({
            user: userDetails,
            token: token,
            message: "Signed In"
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
};

var register = function register(req, res) {
  var _req$body2, username, password, firstName, lastName, admin, user;

  return regeneratorRuntime.async(function register$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password, firstName = _req$body2.firstName, lastName = _req$body2.lastName, admin = _req$body2.admin;

          if (!username || !password || !firstName || !lastName) {
            res.status(400).send({
              message: "all fields are required"
            });
          }

          _context2.prev = 2;
          // const user = await User.create({ username, password, firstName, lastName });
          user = new User({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            admin: admin
          });
          _context2.next = 6;
          return regeneratorRuntime.awrap(user.save());

        case 6:
          res.status(200).send({
            user: user
          });
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](2);
          res.status(500).send({
            error: _context2.t0
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

module.exports = {
  login: login,
  register: register
};
//# sourceMappingURL=auth.controllers.dev.js.map
