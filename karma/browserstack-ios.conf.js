// modules
var baseConfig = require('./browserstack.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'iphone-9.1',
        'ipad-9.1',
        'iphone-8.3',
        'ipad-8.3',
        'iphone-7.0',
        'ipad-7.0',
        'iphone-6.0',
        'ipad-6.0'
        // 'iphone-5.1', // does not support new Date('ISO 8601')
        // 'ipad-5.1', // does not support new Date('ISO 8601')
        // 'ipad-5.0' // browser does not launch
      ];
      config.set(base);
    }
  });
};
