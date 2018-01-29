const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'opera-12.16'
      ];
      config.set(base);
    }
  });
};
