import express = require('express');
import controller = require('./controller');

var router = express.Router();

router.get('/', controller.index);

export = router;
