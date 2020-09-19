const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'safari-13.1',
        'safari-12.1',
        'safari-11.1',
        'safari-10.1',
      ];
      config.set(base);
    },
  });
};
