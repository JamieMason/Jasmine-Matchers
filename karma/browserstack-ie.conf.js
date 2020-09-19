const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = [
        'edge-85.0',
        'edge-84.0',
        'edge-83.0',
        'edge-81.0',
        'edge-80.0',
      ];
      config.set(base);
    },
  });
};
