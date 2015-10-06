import mongoose = require('mongoose');

export interface ITodo extends mongoose.Document {
    name: string;
    description: string;
    active: boolean;
}

export interface ITodoModel extends mongoose.Model<ITodo> {}


