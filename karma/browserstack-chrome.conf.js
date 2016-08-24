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
        'chrome-44.0',
        'chrome-43.0',
        'chrome-42.0',
        'chrome-41.0',
        'chrome-40.0',
        'chrome-39.0',
        'chrome-38.0',
        'chrome-37.0',
        'chrome-36.0',
        'chrome-35.0',
        'chrome-34.0',
        'chrome-33.0',
        'chrome-32.0',
        'chrome-31.0',
        'chrome-30.0',
        'chrome-29.0',
        'chrome-28.0',
        'chrome-27.0',
        'chrome-26.0',
        'chrome-25.0',
        'chrome-24.0',
        'chrome-23.0',
        'chrome-22.0',
        'chrome-21.0',
        'chrome-20.0',
        'chrome-19.0',
        'chrome-18.0',
        'chrome-17.0',
        'chrome-16.0'
        // 'chrome-15.0' // browserstack runner is showing choose search engine screen
        // 'chrome-14.0' // browserstack reporting version is invalid
      ];
      config.set(base);
    }
  });
};
