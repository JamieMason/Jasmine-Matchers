const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['safari-11.1', 'safari-12.0'];
      config.set(base);
    }
  });
};
