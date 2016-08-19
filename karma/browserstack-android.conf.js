// modules
var baseConfig = require('./browserstack.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
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
