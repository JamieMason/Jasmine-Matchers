const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'safari-9.1',
        'safari-8.0',
        'safari-7.1',
        'safari-6.2',
        'safari-6.0'
        // 'safari-5.1' // unsupported, does not support ISO 8601
      ];
      config.set(base);
    }
  });
};
