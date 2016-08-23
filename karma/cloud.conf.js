// modules
var baseConfig = require('./base.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browserDisconnectTimeout = 10000; // default 2000
      base.browserDisconnectTolerance = 10; // default 0
      base.browserNoActivityTimeout = 4 * 60 * 1000; // default 10000
      base.browsers = [];
      base.captureTimeout = 4 * 60 * 1000; // default 60000
      base.customLaunchers = null;
      base.forceJSONP = true;
      base.logLevel = config.LOG_DEBUG;
      base.transports = ['polling'];
      config.set(base);
    }
  });
};
