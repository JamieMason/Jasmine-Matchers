const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'opera-12.16',
        'opera-12.15'
      ];
      config.set(base);
    }
  });
};
