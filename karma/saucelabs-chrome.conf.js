// modules
var baseConfig = require('./saucelabs.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'chrome-52',
        'chrome-51',
        'chrome-50',
        'chrome-49',
        'chrome-48',
        'chrome-47',
        'chrome-46',
        'chrome-45',
        'chrome-44',
        'chrome-43',
        'chrome-42',
        'chrome-41',
        'chrome-40',
        'chrome-39',
        'chrome-38',
        'chrome-37',
        'chrome-36',
        'chrome-35',
        'chrome-34',
        'chrome-33',
        'chrome-32',
        'chrome-31',
        'chrome-30',
        'chrome-29',
        'chrome-28',
        'chrome-27',
        'chrome-26'
      ];
      config.set(base);
    }
  });
};
