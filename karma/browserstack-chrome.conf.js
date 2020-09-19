const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'chrome-85.0',
        'chrome-84.0',
        'chrome-83.0',
        'chrome-81.0',
        'chrome-80.0',
      ];
      config.set(base);
    },
  });
};
