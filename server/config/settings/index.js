/// <reference path="../../../typings/tsd.d.ts" />
var path = require('path');
var _ = require('lodash');
var baseSettings = {
    env: process.env.NODE_ENV || 'development',
    root: path.normalize(path.join(__dirname, '../../')),
    port: process.env.PORT || 3000,
    secrets: {
        session: ''
    }
};
var envSettings = require('./' + baseSettings.env) || {};
var settings = _.assign(baseSettings, envSettings);
module.exports = settings;
