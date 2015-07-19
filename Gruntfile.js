/**
 * grunt configuration
 */

'use strict';

var path = require('path');

module.exports = function(grunt){
  require('load-grunt-config')(grunt, {
    data: {
      settings: {
        projectRoot  : path.join(process.cwd(), 'server'),
        // assets
        getAssetsVendorDir : function(){ return path.join(this.projectRoot, 'assets', 'vendor'); }
      }
    }
  });
};
