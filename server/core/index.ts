import express = require('express');
import {Homes} from "./controller";

function router(passport) {
    var router = express.Router();
    
    router.get('/', Homes.index);
    router.get('/login', Homes.login);
    router.get('/signup', Homes.signup);
    
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/todos',
        failureRedirect: '/login'
    }));
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/todos',
        failureRedirect: '/signup'
    }));
    
    return router
}


export = router;
