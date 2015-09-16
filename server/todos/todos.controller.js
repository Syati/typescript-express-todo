var Todo = require('./todos.models');
var TodosController = (function () {
    function TodosController() {
    }
    TodosController.index = function (request, response) {
        Todo.find({}, function (err, todos) {
            if (err) {
                return response.sendStatus(404);
            }
            ;
            response.render('todos/index', { title: 'Todos', todos: todos });
        });
    };
    TodosController.new = function (request, response) {
        response.render('todos/new', { title: 'new' });
    };
    TodosController.create = function (request, response) {
        var post = {
            name: request.body.name,
            description: request.body.description,
            active: false
        };
        Todo.create(post);
        response.redirect('/todos');
    };
    TodosController.destroy = function (request, response) {
        Todo.findById(request.params.id, function (err, todo) {
            todo.remove(function (err) {
                if (err) {
                    return response.sendStatus(404);
                }
                ;
                response.redirect('/todos');
            });
        });
    };
    TodosController.show = function (request, response) {
        Todo.findById(request.params.id, function (err, todo) {
            if (err) {
                return response.sendStatus(404);
            }
            ;
            response.render('todos/detail', { title: 'Todos Detail', todo: todo });
        });
    };
    TodosController.edit = function (request, response) {
        Todo.findById(request.params.id, function (err, todo) {
            if (err) {
                return response.sendStatus(404);
            }
            ;
            response.render('todos/edit', { title: 'Todos Edit', todo: todo });
        });
    };
    TodosController.update = function (request, response) {
        Todo.findById(request.params.id, function (err, todo) {
            todo.name = request.body.name;
            todo.description = request.body.description;
            todo.save(function (err, res) {
                if (err) {
                    return response.sendStatus(404);
                }
                ;
                response.redirect('/todos');
            });
        });
    };
    return TodosController;
})();
module.exports = TodosController;
