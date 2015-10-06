import mongoose = require('mongoose');
import bcrypt = require('bcrypt');
import Schema = mongoose.Schema;

import {IUserModel} from "./interfaces";

var userSchema: Schema = new Schema({
    username: String,
    password: String
});

userSchema.static('generateHash', function(password: string) {
    return new Promise<string>((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, function(err, hash){
                if(err) {
                    reject(err);                 
                } else {
                    resolve(hash);
                }
            });
        });
    });
});

userSchema.method('authenticate', function(password: string) {
    return new Promise<boolean>((resolve, reject) => {    
        bcrypt.compare(password, this.password, function(err, res){
            if(err){
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
});
    

var User: IUserModel = <IUserModel>mongoose.model('User', userSchema);


export = User
