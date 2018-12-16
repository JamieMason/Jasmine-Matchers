const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['safari-9.1', 'safari-10.1', 'safari-11.0'];
      config.set(base);
    }
  });
};
