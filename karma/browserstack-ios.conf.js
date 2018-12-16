const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['iphone-10.3'];
      config.set(base);
    }
  });
};
