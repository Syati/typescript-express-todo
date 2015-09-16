/**
 * grunt configuration
 */

'use strict';

var path = require('path');

module.exports = function(grunt){
  var appRoot = path.dirname(__filename);
  var serverRoot = path.join(appRoot, 'server');

  require('load-grunt-config')(grunt, {
    configPath: path.join(appRoot, 'grunt'),
    data: {
      settings: {
        SERVER_ROOT  : serverRoot,
        APP : path.join(serverRoot, 'app.js'),
        VIEWS_ROOT : path.join(serverRoot, 'views'),
        ASSETS_ROOT : path.join(serverRoot, 'assets'),
        VENDOR_ROOT : path.join(serverRoot, 'assets', 'vendor'),
        PUBLIC_ROOT : path.join(serverRoot, 'public')
      }
    }
  });
};
