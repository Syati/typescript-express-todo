var path = require('path');

module.exports = {
  default: {
    options: {
      name: 'Style Guide'
    },    
    files: {
      'docs/styledocco': path.join('<%= settings.ASSETS_ROOT %>', 'stylesheets')
    }
  }
}
