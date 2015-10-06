import express = require('express')

export class Homes {
    static index(request: express.Request, response: express.Response) {
        response.render('core/index', { title: 'Todo' });                
    }

    static login(request: express.Request, response: express.Response) {
        response.render('core/login', { title: 'log in' });                
    }

    static logout(request: express.Request, response: express.Response) {
        request.logout();
        request.session.destroy(() => {
            response.redirect('/');
        });
    }
    
    static signup(request: express.Request, response: express.Response) {
        response.render('core/signup', { title: 'Sign up' });        
    }
}
