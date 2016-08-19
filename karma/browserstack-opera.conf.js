// modules
var baseConfig = require('./browserstack.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'opera-12.16',
        'opera-12.15'
      ];
      config.set(base);
    }
  });
};
