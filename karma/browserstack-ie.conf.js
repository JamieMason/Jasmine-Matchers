// modules
var baseConfig = require('./browserstack.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'edge-13.0',
        'ie-11.0',
        'ie-10.0',
        'ie-9.0'
        // 'ie-8.0' // unsupported
        // 'ie-7.0' // unsupported
        // 'ie-6.0' // unsupported
      ];
      config.set(base);
    }
  });
};
