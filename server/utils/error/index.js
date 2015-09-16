/// <reference path="../../../typings/tsd.d.ts" />
exports.error404 = function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};
exports.devErrorHandler = function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
};
exports.prodErrorHandler = function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};
