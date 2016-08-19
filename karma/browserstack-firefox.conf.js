// modules
var baseConfig = require('./browserstack.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'firefox-47.0',
        'firefox-46.0',
        'firefox-45.0',
        'firefox-44.0',
        'firefox-43.0',
        'firefox-42.0',
        'firefox-41.0',
        'firefox-40.0',
        'firefox-39.0',
        'firefox-38.0',
        'firefox-37.0',
        'firefox-36.0',
        'firefox-35.0',
        'firefox-34.0',
        'firefox-33.0',
        'firefox-32.0',
        'firefox-31.0',
        'firefox-30.0',
        'firefox-29.0',
        'firefox-28.0',
        'firefox-27.0',
        'firefox-26.0',
        'firefox-25.0',
        'firefox-24.0',
        'firefox-23.0',
        'firefox-22.0',
        'firefox-21.0',
        'firefox-20.0',
        'firefox-19.0',
        'firefox-18.0',
        'firefox-17.0',
        'firefox-16.0',
        'firefox-15.0',
        'firefox-14.0',
        'firefox-13.0',
        'firefox-12.0',
        'firefox-11.0',
        'firefox-10.0',
        'firefox-9.0',
        'firefox-8.0',
        'firefox-7.0',
        'firefox-6.0',
        'firefox-5.0',
        'firefox-4.0'
        // 'firefox-3.6' // toBeJsonString issue
      ];
      config.set(base);
    }
  });
};
