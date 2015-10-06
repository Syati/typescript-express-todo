import express = require('express');
import Todo = require('./models');

class TodosController {
    static index(request: express.Request, response: express.Response) {
        Todo.find({}, (err, todos) => {
            if(err) { return response.sendStatus(404) };
            response.render('todos/index', { title: 'Todos', todos: todos });
        });
    }

    static new(request: express.Request, response: express.Response) {
        response.render('todos/new', { title: 'new' });
    }

    static create(request: express.Request, response: express.Response) {
        var post = {
            name: request.body.name,
            description: request.body.description,
            active: false
        };
        Todo.create(post);
        response.redirect('/todos');
    }

    static destroy(request: express.Request, response: express.Response) {
        Todo.findById(request.params.id, (err, todo) => {
            todo.remove((err) => {
                if(err) { return response.sendStatus(404) };
                response.redirect('/todos');
            });
        });
    }

    static show(request: express.Request, response: express.Response) {
        Todo.findById(request.params.id, (err, todo) => {
            if(err) { return response.sendStatus(404) };
            response.render('todos/detail', { title: 'Todos Detail', todo: todo });
        });
    }

    static edit(request: express.Request, response: express.Response) {
        Todo.findById(request.params.id, (err, todo) => {
            if(err) { return response.sendStatus(404) };
            response.render('todos/edit', { title: 'Todos Edit', todo: todo });
        });
    }

    static update(request: express.Request, response: express.Response) {
        Todo.findById(request.params.id, (err, todo) => {
            todo.name = request.body.name;
            todo.description = request.body.description;
            todo.save((err, res) => {
                if(err) { return response.sendStatus(404) };
                response.redirect('/todos');
            });
        });
    }
}

export = TodosController;
