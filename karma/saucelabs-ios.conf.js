// modules
var baseConfig = require('./saucelabs.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        // 'ipad-9.3', // keeps timing out
        // 'ipad-9.2', // keeps timing out
        'ipad-9.1',
        'ipad-9.0',
        'ipad-8.4',
        'ipad-8.3',
        'ipad-8.2',
        'ipad-8.1'
        // ipad-7.1 // keeps timing out
        // ipad-7.0 // keeps timing out
      ];
      config.set(base);
    }
  });
};
