const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['firefox-55.0', 'firefox-56.0', 'firefox-57.0'];
      config.set(base);
    }
  });
};
