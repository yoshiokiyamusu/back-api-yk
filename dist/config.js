"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HOST = exports.PORT = exports.PAYPAL_API = exports.PAYPAL_API_SECRET = exports.PAYPAL_API_CLIENT = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); //Paypal

var PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT;
exports.PAYPAL_API_CLIENT = PAYPAL_API_CLIENT;
var PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;
exports.PAYPAL_API_SECRET = PAYPAL_API_SECRET;
var PAYPAL_API = process.env.PAYPAL_API; // url sandbox or live for your app
// Server

exports.PAYPAL_API = PAYPAL_API;
var PORT = process.env.PORT || 3320;
exports.PORT = PORT;
var HOST = process.env.NODE_ENV === "production" ? process.env.HOST : "http://localhost:" + PORT;
exports.HOST = HOST;