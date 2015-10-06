import mongoose = require('mongoose');

export interface IUser extends mongoose.Document {
    username: string;
    password: string;
    email: string;
    
    authenticate(password: string): Promise<boolean>;
}

export interface IUserModel extends mongoose.Model<IUser> {
    generateHash(password: string): Promise<string>;
}

