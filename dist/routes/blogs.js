"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _blogs = require("../controllers/blogs");

var isAuth = require("../middleware/is-auth"); //para ponerle restriccion de token a los endpoints


var router = (0, _express.Router)();
router.get('/blogs', isAuth, _blogs.getBlogs);
router.get('/blogs/:id', _blogs.getBlog);
router.post('/blogs', _blogs.createBlog);
router["delete"]('/blogs/:id', _blogs.deleteBlog);
var _default = router;
exports["default"] = _default;