// modules
var manifest = require('../package.json');
var baseConfig = require('./cloud.conf');
var platforms = require('./saucelabs.json');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = Object.keys(platforms);
      base.concurrency = 2;
      base.customLaunchers = platforms;
      base.reporters = ['nested', 'coverage', 'saucelabs'];
      base.sauceLabs = {
        commandTimeout: 600,
        idleTimeout: 1800,
        maxDuration: 1800,
        recordScreenshots: false,
        recordVideo: false,
        testName: 'Jasmine Matchers ' + manifest.version
      };
      config.set(base);
    }
  });
};
