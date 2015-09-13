/// <reference path="../../../typings/tsd.d.ts" />

import path = require('path')
import _ = require('lodash')

var baseSettings = {
    env: process.env.NODE_ENV || 'development',
    root: path.normalize(path.join(__dirname, '../../')),
    port: process.env.PORT || 3000,
    secrets: {
        session: ''
    }
}
var envSettings = require('./' + baseSettings.env) || {};
var settings: any = _.assign(baseSettings, envSettings);

export = settings
