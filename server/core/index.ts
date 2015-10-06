import express = require('express');

import {isAuthenticated, isNotAuthenticated} from "../users/middleware";
import {Homes} from "./controller";

function router(passport) {
    var router = express.Router();

    router.get('/', isNotAuthenticated, Homes.index);
    router.get('/login', isNotAuthenticated, Homes.login);
    router.get('/signup', isNotAuthenticated, Homes.signup);
    router.get('/logout', isAuthenticated, Homes.logout);

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
