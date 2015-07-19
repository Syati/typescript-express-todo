module.exports = {
  typescript: {
    files: ['server/**/*.ts'],
    tasks: ['newer:typescript:default']
  },
  rsync: {
    files: ['server/assets/images/**/*'],
    tasks: ['rsync:default']
  }
};
