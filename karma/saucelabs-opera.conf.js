// modules
var baseConfig = require('./saucelabs.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'opera-12',
        'opera-11'
      ];
      config.set(base);
    }
  });
};
