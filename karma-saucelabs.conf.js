// modules
var baseConfig = require('./karma.conf');
var manifest = require('./package.json');
var platforms = require('./saucelabs.json');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.customLaunchers = platforms;
      base.browsers = Object.keys(base.customLaunchers);
      base.reporters = ['nested', 'coverage', 'saucelabs'];
      base.retryLimit = 5;
      base.singleRun = true;
      base.sauceLabs = {
        commandTimeout: 600,
        idleTimeout: 1800,
        maxDuration: 1800,
        recordScreenshots: false,
        testName: 'Jasmine Matchers ' + manifest.version
      };
      config.set(base);
    }
  });
};
