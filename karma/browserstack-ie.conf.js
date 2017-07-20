const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'edge-13.0',
        'ie-11.0',
        'ie-10.0',
        'ie-9.0'
        // 'ie-8.0' // unsupported
        // 'ie-7.0' // unsupported
        // 'ie-6.0' // unsupported
      ];
      config.set(base);
    }
  });
};
