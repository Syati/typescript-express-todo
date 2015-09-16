/// <reference path="../typings/tsd.d.ts" />
var express = require('express');
var mongoose = require('mongoose');
var settings = require('./config/settings/index');
// db
mongoose.connect(settings.mongo.uri);
// app
var app = express();
require('./config/express')(app);
// server
var debug = require('debug')('server');
app.listen(settings.port, function () {
    return debug('Express server listening on %d, in %s mode', settings.port, settings.env);
});
module.exports = app;
