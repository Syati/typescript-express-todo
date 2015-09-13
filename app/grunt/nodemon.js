module.exports = {
  default: {
    script: '<%= settings.APP %>',
    options: {
      callback: function(nodemon) {
        // refreshes browser when server reboots
        nodemon.on('restart', function () {
          // Delay before server listens on port
          setTimeout(function() {
            require('fs').writeFileSync('.rebooted', 'rebooted');
          }, 1000);
        });
      }
    }
  }
};

