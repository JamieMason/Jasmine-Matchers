const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'iphone-10.3',
        'iphone-11.0',
        'iphone-11.2',
        'iphone-11.4',
        'iphone-12.0',
        'iphone-12.1'
      ];
      config.set(base);
    }
  });
};
