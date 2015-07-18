/// <reference path="../../typings/tsd.d.ts" />
import express = require('express')

var todoFixture = [
    {title: 'title0', body: 'body0'},
    {title: 'title1', body: 'body1'},
    {title: 'title2', body: 'body2'}
];

export = Todos;

class Todos {
    static index(request: express.Request, response: express.Response) {
        response.render('todos/index', { title: 'Todos', todos: todoFixture });
    }
    
    static create(request: express.Request, response: express.Response) {
        var post = {
            title: request.body.title,
            body: request.body.body
        };
        todoFixture.push(post);
        response.redirect('/todos');
    }

    static detail(request: express.Request, response: express.Response) {
        response.render('todos/detail', { title: 'Todos Detail', todo: todoFixture[request.params.id] });
    }

    static edit(request: express.Request, response: express.Response) {
        response.render('todos/edit', { title: 'Todos edit', todo: todoFixture[request.params.id] });
    }
}


