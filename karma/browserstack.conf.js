const baseConfig = require('./cloud.conf');
const platforms = require('./browserstack.json');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = Object.keys(platforms);
      base.concurrency = 5;
      base.customLaunchers = platforms;
      base.browserStack = {
        accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
        username: process.env.BROWSERSTACK_USERNAME,
      };
      config.set(base);
    },
  });
};
