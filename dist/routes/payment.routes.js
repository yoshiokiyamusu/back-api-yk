"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _payment = require("../controllers/payment.controller");

var router = (0, _express.Router)();
router.post("/create-order", _payment.createOrder);
router.get("/capture-order", _payment.captureOrder);
router.get("/cancel-order", _payment.cancelPayment);
var _default = router;
exports["default"] = _default;