/// <reference path="../typings/tsd.d.ts" />
import express = require('express');
import mongoose = require('mongoose');
import settings = require('./config/settings/index');

// db
mongoose.connect(settings.mongo.uri);

// app
var app = express();
require('./config/express')(app);

// server
var debug = require('debug')('server');
app.listen(settings.port, ()=>
    debug(
        'Express server listening on %d, in %s mode',
        settings.port, settings.env
    )
);

export = app;
