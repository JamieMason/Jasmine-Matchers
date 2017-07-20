const baseConfig = require('./base.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browserDisconnectTimeout = 10000; // Default 2000
      base.browserDisconnectTolerance = 10; // Default 0
      base.browserNoActivityTimeout = 4 * 60 * 1000; // Default 10000
      base.browsers = [];
      base.captureTimeout = 4 * 60 * 1000; // Default 60000
      base.customLaunchers = null;
      base.forceJSONP = true;
      base.logLevel = config.LOG_DEBUG;
      base.transports = ['polling'];
      config.set(base);
    }
  });
};
