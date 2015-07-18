/// <reference path="../../typings/tsd.d.ts" />
import express = require('express')

export = Homes;

class Homes {
    static index(request: express.Request, response: express.Response) {
        response.render('index', { title: 'Index'});
    }
}


