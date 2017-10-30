const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'android-7.0',
        'android-7.1',
        'android-8.0'
      ];
      config.set(base);
    }
  });
};
