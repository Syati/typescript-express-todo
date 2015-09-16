/// <reference path="../../typings/tsd.d.ts" />
var express = require('express');
var controller_1 = require("./controller");
var router = express.Router();
router.get('/', controller_1.Home.index);
router.get('/login', controller_1.Account.login);
router.get('/signup', controller_1.Account.signup);
module.exports = router;
