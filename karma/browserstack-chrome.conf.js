const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['chrome-69.0', 'chrome-70.0', 'chrome-71.0'];
      config.set(base);
    }
  });
};
