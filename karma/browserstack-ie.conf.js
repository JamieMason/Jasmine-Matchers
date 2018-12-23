const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['edge-16.0', 'edge-17.0', 'edge-18.0'];
      config.set(base);
    }
  });
};
