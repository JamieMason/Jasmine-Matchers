const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'firefox-47.0',
        'firefox-46.0',
        'firefox-45.0',
        'firefox-44.0',
        'firefox-43.0',
        'firefox-42.0',
        'firefox-41.0',
        'firefox-40.0'
      ];
      config.set(base);
    }
  });
};
