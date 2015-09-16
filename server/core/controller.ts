/// <reference path="../../typings/tsd.d.ts" />

import express = require('express')

export class Home {
    static index(request: express.Request, response: express.Response) {
        response.render('core/index', { title: 'Todo' });                
    }
}

export class Account {
    static login(reqest: express.Request, response: express.Response) {
        response.render('core/account/login', { title: 'log in' });                
    }
    
    static signup(reqest: express.Request, response: express.Response) {
        response.render('core/account/signup', { title: 'Sign up' });        
    }
}
