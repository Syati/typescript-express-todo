/**
 * grunt configuration
 */

'use strict';

var path = require('path');

module.exports = function(grunt){
  var appRoot = path.dirname(__filename);
  var projectRoot = path.join(appRoot, 'server');

  require('load-grunt-config')(grunt, {
    configPath: path.join(appRoot, 'grunt'),
    data: {
      settings: {
        PROJECT_ROOT  : projectRoot,
        APP : path.join(projectRoot, 'app.js'),
        VIEWS_ROOT : path.join(projectRoot, 'views'),
        // assets
        ASSETS_ROOT : path.join(projectRoot, 'assets'),
        VENDOR_ROOT : path.join(projectRoot, 'assets', 'vendor'),
        PUBLIC_ROOT : path.join(projectRoot, 'public')
      }
    }
  });
};
