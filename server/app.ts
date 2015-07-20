/// <reference path="../typings/tsd.d.ts" />
import express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// app
var app = express();
require('./config/base')(app);

// server
var debug = require('debug')('server');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>
    debug(
        'Express server listening on %d, in %s mode',
        app.get('port'), app.get('env')
    )
);

export = app;
