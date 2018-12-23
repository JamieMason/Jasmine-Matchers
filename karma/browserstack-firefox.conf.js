const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['firefox-62.0', 'firefox-63.0', 'firefox-64.0'];
      config.set(base);
    }
  });
};
