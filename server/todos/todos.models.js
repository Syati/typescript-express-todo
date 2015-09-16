/// <reference path="../../typings/tsd.d.ts" />
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
    name: String,
    description: String,
    active: Boolean
});
var TodoModel = mongoose.model('Todo', TodoSchema);
module.exports = TodoModel;
