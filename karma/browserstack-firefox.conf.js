const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'firefox-80.0',
        'firefox-79.0',
        'firefox-78.0',
        'firefox-77.0',
        'firefox-76.0',
      ];
      config.set(base);
    },
  });
};
