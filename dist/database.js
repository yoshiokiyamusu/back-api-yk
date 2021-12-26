"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _promise = _interopRequireDefault(require("mysql2/promise"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();
/*
const config_free_jaws = {
    host: "un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "o4ss489wi958kx63",
    password: 'jtssfqcw52r5i9kj',
    database: 'oz5sldk8ael1ojko'
};*/

var config_free_jaws = {
  host: process.env.host_db,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
};
/*
const connect = async ()=>{
    const conn = await mysql.createConnection(config);
    const result = conn.execute("Select 1+1");
    console.log(result);
};
*/

var connect = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var conn;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _promise["default"].createConnection(config_free_jaws);

          case 2:
            conn = _context.sent;
            return _context.abrupt("return", conn);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function connect() {
    return _ref.apply(this, arguments);
  };
}();

exports.connect = connect;