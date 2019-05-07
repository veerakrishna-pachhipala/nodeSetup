"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _dbConnection = _interopRequireDefault(require("./services/dbConnection"));

var _users = _interopRequireDefault(require("./routes/users.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])('dev'));
app.use((0, _helmet["default"])());
app.use('/users', _users["default"]);
app.get("/", function (req, res, next) {
  res.send("Welcome to Docs");
});
app.use(function (req, res, next) {
  res.status(404).json({
    status: 404,
    message: 'Page Not Found'
  });
});
app.use(function (err, req, res, next) {
  debug(err.stack);
  res.status(500).json({
    status: 500,
    message: 'Oops something went wrong..'
  });
});
var _default = app;
exports["default"] = _default;