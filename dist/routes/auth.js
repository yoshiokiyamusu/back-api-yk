"use strict";

var express = require('express'); //const { body } = require('express-validator/check');


var authController = require('../controllers/auth');

var router = express.Router(); //Recibe POST request del frontend

router.post('/login', authController.login);
module.exports = router;