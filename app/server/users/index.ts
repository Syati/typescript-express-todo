/// <reference path="../../../typings/tsd.d.ts" />
import express = require('express');
import controller = require('./users.controller');

var router = express.Router();

router.get('/', controller.index);

export = router;
