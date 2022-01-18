"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _weather = require("../controllers/weather");

var isAuth = require("../middleware/is-auth"); //para ponerle restriccion de token a los endpoints


var router = (0, _express.Router)();
router.post('/writeDateTemp', _weather.writeDateTemp); //isAuth, 

router.post('/reg_weather_item', _weather.createWeatherItem);
router.get('/get_stored_weather', isAuth, _weather.getWeatheRecords);
var _default = router;
exports["default"] = _default;