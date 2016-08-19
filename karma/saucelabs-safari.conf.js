// modules
var baseConfig = require('./saucelabs.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        // safari-9 // keeps timing out
        // safari-8 // keeps timing out
        'safari-7',
        'safari-6'
        // safari-5 // unsupported, does not support ISO 8601
      ];
      config.set(base);
    }
  });
};
