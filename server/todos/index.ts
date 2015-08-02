/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import controller = require('./todos.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/create', controller.create);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.get('/:id/edit', controller.edit);
router.delete('/:id', controller.destroy);


export = router;
