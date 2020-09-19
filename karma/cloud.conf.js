const baseConfig = require('./base.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [];
      base.customLaunchers = null;
      base.forceJSONP = true;
      base.logLevel = config.LOG_DEBUG;
      base.transports = ['polling'];
      config.set(base);
    },
  });
};
