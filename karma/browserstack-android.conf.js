const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        // 'android-5.0', browserstack is timing out
        'android-4.4',
        'android-4.3',
        'android-4.2',
        'android-4.1',
        'android-4.0'
      ];
      config.set(base);
    }
  });
};
