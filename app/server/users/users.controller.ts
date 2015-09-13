/// <reference path="../../../typings/tsd.d.ts" />
import express = require('express')

export = Users;

class Users {
    static index(request: express.Request, response: express.Response) {
        response.render('users/index', { title: 'Users' });
    }
}


