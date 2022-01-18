"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database.js");

var _require = require("express-validator/check"),
    validationResult = _require.validationResult;

var bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken"); //const User = require('../models/user');


exports.login = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var connection, user_name, password, loadedUser, $var_sql, _yield$connection$que, _yield$connection$que2, rows, contador, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context.sent;
            user_name = req.body.user_name;
            password = req.body.password;
            //Evaluar si existe ese input mail en la DB(Mysql)
            $var_sql = "SELECT COUNT(*) as 'count' FROM users WHERE users = '" + user_name + "' "; //console.log($var_sql);

            _context.next = 8;
            return connection.query($var_sql);

          case 8:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            contador = parseInt(rows[0].count);
            console.log(contador);

            if (contador < 1) {
              res.status(401).json({
                "message": "Credenciales erradas"
              });
            } else {
              token = jwt.sign({
                email: user_name
              }, "somesuperyoshiosecretpassword", {
                expiresIn: "1h"
              } //en una hora muere la session token
              );
              console.log(token);
              res.status(200).json({
                token: token
              });
            }

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();