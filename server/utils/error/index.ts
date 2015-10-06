import express = require('express');

export var error404: express.RequestHandler = function(req, res, next) {
    var err:any = new Error('Not Found');
    err.status = 404;
    next(err);
}

export var devErrorHandler: express.ErrorRequestHandler = function(err: any, req: express.Request, res: express.Response, next: Function): any {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
}

export var prodErrorHandler: express.ErrorRequestHandler = function(err: any, req: express.Request, res: express.Response, next: Function): any {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
}

