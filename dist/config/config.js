"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dev = _interopRequireDefault(require("./dev"));

var _prod = _interopRequireDefault(require("./prod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var environment = process.env.NODE_ENV;
var config = {
  dev: _dev["default"],
  prod: _prod["default"]
};

var _default = config[environment] || config.dev;

exports["default"] = _default;