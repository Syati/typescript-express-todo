/// <reference path="../../typings/tsd.d.ts" />
var express = require('express');
var controller = require('./users.controller');
var router = express.Router();
router.get('/', controller.index);
module.exports = router;
