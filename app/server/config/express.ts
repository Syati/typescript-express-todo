/// <reference path="../../typings/tsd.d.ts" />

// Third party
import express = require('express');
import path = require('path');
import favicon = require('serve-favicon');
import logger = require('morgan');
import cookieParser = require('cookie-parser');
import bodyParser = require('body-parser');
import methodOverride = require('method-override');
import lessMiddleware = require('less-middleware');

// Local
import settings = require('./settings/index');
import utilError = require('../utils/error/index');

function config(app) {
    // view engine setup
    app.set('views', path.join(settings.root, 'views'));
    app.set('view engine', 'jade');
    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(methodOverride('_method'));
    app.use(cookieParser());

    app.use(lessMiddleware(path.join(settings.root, 'assets'), {
        dest: path.join(settings.root, 'public')
    }));
    app.use(express.static(path.join(settings.root, 'public')));

    // route
    require('./routes')(app);

    // catch 404 and forward to error handler
    app.use(utilError.error404);

    switch(settings.env){
    case "production":
        app.use(utilError.prodErrorHandler);
    case "development":
        app.use(utilError.devErrorHandler);
    }
}

export = config
