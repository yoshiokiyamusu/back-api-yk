"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _blogs = require("../controllers/blogs");

var router = (0, _express.Router)();
router.get('/blogs', _blogs.getBlogs);
var _default = router;
exports["default"] = _default;