import mongoose = require('mongoose');
import Schema = mongoose.Schema;
import itodo = require('./todos.interface');

var TodoSchema: Schema = new Schema({
    name: String,
    description: String,
    active: Boolean
});

var TodoModel: itodo.ITodoModel = <itodo.ITodoModel>mongoose.model('Todo', TodoSchema);

export = TodoModel;
