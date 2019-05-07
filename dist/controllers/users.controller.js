"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _users = _interopRequireDefault(require("../models/users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.add = function addUser(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      error: {
        statusCode: 400,
        message: 'body is missing'
      }
    });
  }

  var newUser = new _users["default"]({
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone
  });
  newUser.save(function (err, result) {
    if (err) {
      if (err.code === 11000) {
        res.status(409).json({
          error: {
            statusCode: 409,
            message: 'User Already exists.'
          }
        });
      } else {
        res.status(500).json({
          error: {
            statusCode: 500,
            message: 'Something went wrong while adding a new user'
          }
        });
      }
    } else {
      res.status(201).json({
        statusCode: 201,
        data: result,
        message: "Successfully Created"
      });
    }
  });
};