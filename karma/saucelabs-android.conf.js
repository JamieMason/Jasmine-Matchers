// modules
var baseConfig = require('./saucelabs.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'android-5.1',
        'android-5.0',
        'android-4.4',
        'android-4.3',
        'android-4.2',
        'android-4.1'
        // android-4.0 // keeps timing out
      ];
      config.set(base);
    }
  });
};
