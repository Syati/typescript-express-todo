/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import controller = require('./homes.controller');

var router = express.Router();

router.get('/', controller.index);

export = router;
