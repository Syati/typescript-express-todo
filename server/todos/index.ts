/// <reference path="../../typings/tsd.d.ts" />
import express = require('express');
import controller = require('./todos.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/new', controller.new);
router.post('/create', controller.create);
router.get('/:id([0-9]+)', controller.show);
router.put('/:id([0-9]+)', controller.update);
router.get('/:id([0-9]+)/edit', controller.edit);
router.delete('/:id([0-9]+)', controller.destroy);


export = router;
