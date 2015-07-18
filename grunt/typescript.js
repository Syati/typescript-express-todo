module.exports = {
  default: {
      src: ['server/**/*.ts'],
      options: {
        module: 'commonjs', //or commonjs 
        target: 'es5', //or es3 
        sourceMap: false,
        declaration: false
      }
  }
};
