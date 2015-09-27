var path = require('path');

module.exports = {
  default: {
      src: [path.join('<%= settings.SERVER_ROOT %>', '**/*.ts')],
      options: {
        generateTsConfig: true,
        module: 'commonjs', //or commonjs 
        target: 'es5', //or es3 
        sourceMap: false,
        declaration: false,
        references: [
          "typings/tsd.d.ts"
        ]
      }
  }
};
