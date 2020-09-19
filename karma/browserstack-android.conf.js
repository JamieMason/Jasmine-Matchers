const baseConfig = require('./browserstack.conf');

module.exports = function (config) {
  baseConfig({
    set(base) {
      base.browsers = ['android-9.0', 'android-10.0', 'android-11.0'];
      config.set(base);
    },
  });
};
