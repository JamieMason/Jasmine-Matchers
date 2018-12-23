const baseConfig = require('./browserstack.conf');

module.exports = function(config) {
  baseConfig({
    set(base) {
      base.browsers = ['android-8.0', 'android-8.1', 'android-9.0'];
      config.set(base);
    }
  });
};
