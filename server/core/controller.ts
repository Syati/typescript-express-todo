
import express = require('express')

export class Homes {
    static index(request: express.Request, response: express.Response) {
        response.render('core/index', { title: 'Todo' });                
    }

    static login(reqest: express.Request, response: express.Response) {
        response.render('core/login', { title: 'log in' });                
    }
    
    static signup(reqest: express.Request, response: express.Response) {
        response.render('core/signup', { title: 'Sign up' });        
    }
}
