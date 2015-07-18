/// <reference path="../typings/tsd.d.ts" />

function routes(app) {
    app.use('/', require('./homes'));
    app.use('/todos', require('./todos'));
    app.use('/users', require('./users'));    
}
  
export = routes;

