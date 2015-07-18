module.exports = {
  default: {
    options:{
      targetDir: '<%= settings.getAssetsVendorDir() %>',
      install: true,
      verbose: true,
      cleanTargetDir: true,
      cleanBowerDir: false,
      layout: function (type, component) {
        if (type === 'css') {
          return 'stylesheets';
        } else if (type === 'css/images') {
          return 'stylesheets/images';
        } else {
          return 'js';
        }
      }
    }
  },
  prod: {
    options:{
      targetDir: '<%= settings.getAssetsVendorDir() %>',
      install: true,
      verbose: true,          
      cleanTargetDir: true,
      cleanBowerDir: false,
      bowerOptions: {            
        production: true
      },
      layout: function (type, component) {
        if (type === 'css') {
          return 'stylesheets';
        } else if (type === 'css/images') {
          return 'stylesheets/images';
        } else {
          return 'js';
        }
      }
    }
  }
};

