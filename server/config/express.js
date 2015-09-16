/// <reference path="../../typings/tsd.d.ts" />
// Third party
var express = require('express');
var path = require('path');
//import favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var lessMiddleware = require('less-middleware');
// Local
var settings = require('./settings/index');
var utilError = require('../utils/error/index');
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
    switch (settings.env) {
        case "production":
            app.use(utilError.prodErrorHandler);
        case "development":
            app.use(utilError.devErrorHandler);
    }
}
module.exports = config;
