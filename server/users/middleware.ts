import express = require('express')

export function isAuthenticated(request: express.Request, response:express.Response, next: Function) {
    if (request.user) {
        next();
    } else {
        response.redirect('/login');
    }
}

export function isNotAuthenticated(request: express.Request, response:express.Response, next: Function) {
    if (request.user) {
        response.redirect('/todos');
    } else {
        next();
    }
}
