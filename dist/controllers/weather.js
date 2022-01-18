"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWeatherItem = exports.writeDateTemp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database.js");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//const fetch = require('node-fetch')
var writeDateTemp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var url_weather_api_free;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url_weather_api_free = 'api.openweathermap.org/data/2.5/forecast?q=trumbull&appid=136a856c1b0889b94d1483e842ebb43b';
            _context.next = 3;
            return (0, _nodeFetch["default"])(url_weather_api_free, {//headers: { Authorization: 'Bearer ' + token }
            }).then(function (rows) {
              return rows.json();
            }).then(function (data) {
              data.list[0].weather;
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
            console.log(req.body.weather_id);
            _context2.prev = 1;
            _context2.next = 4;
            return (0, _database.connect)();

          case 4:
            connection = _context2.sent;
            _context2.next = 7;
            return connection.query("INSERT INTO weather (temp_day, feels_like, date_txt) VALUES (?, ?, ?)", [req.body.temp_day, req.body.feels_like, req.body.date_txt]);

          case 7:
            _yield$connection$que = _context2.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            results = _yield$connection$que2[0];
            console.log(results);
            newBlog = _objectSpread({
              id: results.insertId
            }, req.body);
            res.json(newBlog);
            _context2.next = 18;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 15]]);
  }));

  return function createWeatherItem(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createWeatherItem = createWeatherItem;