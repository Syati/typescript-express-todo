
function routes(app, passport) {
    app.use('/', require('../core')(passport));
    app.use('/todos', require('../todos'));
    app.use('/users', require('../users'));
}

export = routes;
