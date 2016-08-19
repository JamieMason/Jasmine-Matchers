// modules
var baseConfig = require('./karma.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'Firefox',
        'Chrome',
        'Opera',
        'PhantomJS',
        'Safari'
      ];
      config.set(base);
    }
  });
};
