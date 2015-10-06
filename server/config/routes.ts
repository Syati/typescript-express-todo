import {isAuthenticated} from "../users/middleware";

function routes(app, passport) {
    app.use('/', require('../core')(passport));
    app.use('/todos', isAuthenticated, require('../todos'));
    app.use('/users', isAuthenticated, require('../users'));
}

export = routes;
