"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

//import './database.js' //database se contecta desde controllers
_app["default"].listen(_app["default"].get('port'));

console.log('Server on port', _app["default"].get('port'));