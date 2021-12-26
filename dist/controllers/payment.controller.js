"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelPayment = exports.captureOrder = exports.createOrder = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _config = require("../config");

//const { check, validationResult } = require("express-validator/check");
var createOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var cart_value, order, params, _yield$axios$post, data, response;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cart_value = req.body.valor;
            _context.prev = 1;
            order = {
              "intent": "CAPTURE",
              "purchase_units": [{
                "amount": {
                  "currency_code": "USD",
                  "value": cart_value
                },
                description: "Item A"
              }],
              application_context: {
                brand_name: "Cocotfyma",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: "".concat(_config.HOST, "/capture-order"),
                cancel_url: "".concat(_config.HOST, "/cancel-payment")
              }
            }; // POST request to generate dynamic access token
            //1.format the body

            params = new URLSearchParams();
            params.append("grant_type", "client_credentials"); //2. const token

            _context.next = 7;
            return _axios["default"].post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              auth: {
                username: _config.PAYPAL_API_CLIENT,
                password: _config.PAYPAL_API_SECRET
              }
            });

          case 7:
            _yield$axios$post = _context.sent;
            data = _yield$axios$post.data;
            _context.next = 11;
            return _axios["default"].post("".concat(_config.PAYPAL_API, "/v2/checkout/orders"), order, {
              headers: {
                "Authorization": "Bearer ".concat(data.access_token)
              }
            });

          case 11:
            response = _context.sent;
            //console.log(response.data.links[1].href);
            res.send(response.data); //res.json(response.data);   

            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", res.status(500).send("something went wrong"));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 15]]);
  }));

  return function createOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createOrder = createOrder;

var captureOrder = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, token, PayerID, response;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$query = req.query, token = _req$query.token, PayerID = _req$query.PayerID; //console.log(token, PayerID);
            //return res.status(500).json({ message: token, pay: PayerID});

            _context2.prev = 1;
            _context2.next = 4;
            return _axios["default"].post("".concat(_config.PAYPAL_API, "/v2/checkout/orders/").concat(token, "/capture"), {}, {
              auth: {
                username: _config.PAYPAL_API_CLIENT,
                password: _config.PAYPAL_API_SECRET
              }
            });

          case 4:
            response = _context2.sent;
            console.log(response.data);
            res.redirect("/payed.html");
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0.message);
            return _context2.abrupt("return", res.status(500).json({
              message: _context2.t0.message
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function captureOrder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.captureOrder = captureOrder;

var cancelPayment = function cancelPayment(req, res) {
  res.redirect("/");
};

exports.cancelPayment = cancelPayment;