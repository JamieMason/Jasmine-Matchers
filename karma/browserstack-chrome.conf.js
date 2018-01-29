const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'chrome-61.0',
        'chrome-62.0',
        'chrome-63.0'
      ];
      config.set(base);
    }
  });
};
