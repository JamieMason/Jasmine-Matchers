const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'ipad-9.1',
        'ipad-8.3',
        'ipad-7.0',
        'ipad-6.0'
        // 'ipad-5.1', // does not support new Date('ISO 8601')
        // 'ipad-5.0' // browser does not launch
      ];
      config.set(base);
    }
  });
};
