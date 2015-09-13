var path = require('path');

module.exports = {
  options: {
    livereload: true
  },
  typescript: {
    files: [path.join('<%= settings.SERVER_ROOT %>', '**/*.ts')],
    tasks: ['newer:typescript:default']
  },
  rsync: {
    files: [path.join('<%= settings.ASSETS_ROOT %>', 'images/**/*')],
    tasks: ['rsync:default']
  },
  // for livereload
  less: {
    files: [path.join('<%= settings.ASSETS_ROOT %>', 'stylesheets/**/*.less')]
  },
  jade: {
    files: [path.join('<%= settings.VIEWS_ROOT %>', '**/*.jade')]
  },
  server: {
    files: ['.rebooted']
  }
};
