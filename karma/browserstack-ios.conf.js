const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'iphone-8.3',
        'iphone-9.1',
        'iphone-10.0'
      ];
      config.set(base);
    }
  });
};
