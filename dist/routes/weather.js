"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _weather = require("../controllers/weather");

var isAuth = require("../middleware/is-auth"); //para ponerle restriccion de token a los endpoints


var router = (0, _express.Router)();
router.get('/writeDateTemp', _weather.writeDateTemp); //isAuth, 

router.post('/reg_weather_item', _weather.createWeatherItem);
var _default = router;
exports["default"] = _default;