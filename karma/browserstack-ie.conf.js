const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'ie-9.0',
        'ie-10.0',
        'ie-11.0'
      ];
      config.set(base);
    }
  });
};
