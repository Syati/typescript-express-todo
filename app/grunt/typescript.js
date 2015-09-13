var path = require('path');

module.exports = {
  default: {
      src: [path.join('<%= settings.PROJECT_ROOT %>', '**/*.ts')],
      options: {
        module: 'commonjs', //or commonjs 
        target: 'es5', //or es3 
        sourceMap: false,
        declaration: false
      }
  }
};
