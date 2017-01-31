// modules
var baseConfig = require('./browserstack.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'chrome-52.0',
        'chrome-51.0',
        'chrome-50.0',
        'chrome-49.0',
        'chrome-48.0',
        'chrome-47.0',
        'chrome-46.0',
        'chrome-45.0',
        'chrome-43.0',
        'chrome-42.0',
        'chrome-41.0',
        'chrome-40.0'
      ];
      config.set(base);
    }
  });
};
