/// <reference path="../../typings/tsd.d.ts" />
import express = require('express')

var todoFixture = [
    {title: 'Make css', body: 'body0'},
    {title: 'Fix todos model', body: 'body1'},
    {title: 'Fix todos controller', body: 'body2'}
];

export = Todos;

class Todos {
    static index(request: express.Request, response: express.Response) {
        response.render('todos/index', { title: 'Todos', todos: todoFixture });
    }

    static new(request: express.Request, response: express.Response) {
        response.render('todos/new', { title: 'new' });
    }

    static create(request: express.Request, response: express.Response) {
        var post = {
            title: request.body.title,
            body: request.body.body
        };
        todoFixture.push(post);
        response.redirect('/todos');
    }

    static destroy(request: express.Request, response: express.Response) {
        todoFixture.splice(request.body.id, 1);
        response.redirect('/todos');
    }

    static show(request: express.Request, response: express.Response) {
        response.render('todos/detail', { title: 'Todos Detail', todo: todoFixture[request.params.id] });
    }

    static edit(request: express.Request, response: express.Response) {
        response.render('todos/edit', {
            title: 'Todos edit',
            id:request.params.id,
            todo: todoFixture[request.params.id]
        });
    }

    static update(request: express.Request, response: express.Response) {
        todoFixture[request.body.id] = {
            title: request.body.title,
            body: request.body.body
        }

        response.redirect('/todos');
    }
}
