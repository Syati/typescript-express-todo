/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import controller = require('./todos.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.detail);
router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.delete('/:id', controller.destroy);

export = router;
