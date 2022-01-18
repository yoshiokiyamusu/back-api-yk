"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatheRecords = exports.createWeatherItem = exports.writeDateTemp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database.js");

var _nextAbsoluteUrl = _interopRequireDefault(require("next-absolute-url"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//const fetch = require("node-fetch");
var fetch = require('node-fetch');

//import fetch from 'node-fetch';
var variable_http_end = 'http://localhost:3320'; //'https://api.herokuapp.com';

var writeDateTemp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var url_weather_api_free;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url_weather_api_free = 'https://api.openweathermap.org/data/2.5/forecast?q=bridgeport&appid=136a856c1b0889b94d1483e842ebb43b';
            _context.next = 3;
            return fetch(url_weather_api_free, {//headers: { Authorization: 'Bearer ' + token }
            }).then(function (rows) {
              return rows.json();
            }).then(function (data) {
              //console.log(data);
              //console.log(data.list.length);
              var n = 0;

              for (n = 0; n < data.list.length; n++) {
                /*
                console.log(data.list[n].main.temp); //data
                console.log(data.list[n].main.feels_like); 
                console.log(data.list[n].dt_txt); 
                console.log(data.list[n].weather[0].description);
                console.log(n);
                */
                //Insert tabla mysql Orden despacho         
                fetch(variable_http_end + '/weather/reg_weather_item', {
                  method: "POST",
                  body: JSON.stringify({
                    temp_day: data.list[n].main.temp,
                    feels_like: data.list[n].main.feels_like,
                    date_txt: data.list[n].dt_txt
                  }),
                  headers: {
                    "Content-Type": "application/json" //Authorization: "Bearer " + token,

                  }
                }).then(function (rows) {//console.log(rows);
                })["catch"](function (err) {
                  console.log(err);
                });
              } //End for


              //End for
              var newBlog = {
                status: 'ok'
              };
              res.json(newBlog);
            })["catch"](function (err) {
              console.log(err);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function writeDateTemp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.writeDateTemp = writeDateTemp;

var createWeatherItem = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, results, newBlog;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context2.sent;
            _context2.next = 6;
            return connection.query("INSERT INTO weather (temp_day, feels_like, date_txt) VALUES (?, ?, ?)", [req.body.temp_day, req.body.feels_like, req.body.date_txt]);

          case 6:
            _yield$connection$que = _context2.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            results = _yield$connection$que2[0];
            console.log(results);
            newBlog = _objectSpread({
              id: results.insertId
            }, req.body);
            res.json(newBlog);
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14]]);
  }));

  return function createWeatherItem(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createWeatherItem = createWeatherItem;

var getWeatheRecords = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, _yield$connection$que3, _yield$connection$que4, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context3.sent;
            _context3.next = 5;
            return connection.query("SELECT * from weather");

          case 5:
            _yield$connection$que3 = _context3.sent;
            _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
            rows = _yield$connection$que4[0];
            res.json(rows);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getWeatheRecords(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getWeatheRecords = getWeatheRecords;