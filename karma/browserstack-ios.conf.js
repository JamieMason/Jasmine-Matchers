const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'iphone-14',
        'iphone-13',
        'iphone-12',
        'iphone-11',
        'iphone-10',
      ];
      config.set(base);
    },
  });
};
