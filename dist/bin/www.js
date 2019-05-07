#!/usr/bin/nodejs
"use strict";

var _debug = _interopRequireDefault(require("debug"));

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const app = require('../app');
_app["default"].set('port', process.env.PORT || 3000);

var server = _app["default"].listen(_app["default"].get('port'), function () {
  (0, _debug["default"])('Express server listening on port ' + server.address().port);
});