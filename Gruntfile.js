module.exports = function(grunt){
  var path = require('path');

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
