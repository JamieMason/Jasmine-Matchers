// modules
var baseConfig = require('./cloud.conf');
var platforms = require('./browserstack.json');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = Object.keys(platforms);
      base.concurrency = 5;
      base.customLaunchers = platforms;
      base.browserStack = {
        accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
        username: process.env.BROWSERSTACK_USERNAME
      };
      config.set(base);
    }
  });
};
