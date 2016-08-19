// modules
var manifest = require('../package.json');
var baseConfig = require('./base.conf');
var platforms = require('./saucelabs.json');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browserDisconnectTimeout = 10000; // default 2000
      base.browserDisconnectTolerance = 10; // default 0
      base.browserNoActivityTimeout = 4 * 60 * 1000; // default 10000
      base.browsers = Object.keys(platforms);
      base.captureTimeout = 4 * 60 * 1000; // default 60000
      base.concurrency = 2;
      base.customLaunchers = platforms;
      base.forceJSONP = true;
      base.logLevel = config.LOG_DEBUG;
      base.reporters = ['nested', 'coverage', 'saucelabs'];
      base.sauceLabs = {
        commandTimeout: 600,
        idleTimeout: 1800,
        maxDuration: 1800,
        recordScreenshots: false,
        recordVideo: false,
        testName: 'Jasmine Matchers ' + manifest.version
      };
      base.singleRun = true;
      config.set(base);
    }
  });
};
