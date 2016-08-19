// modules
var baseConfig = require('./saucelabs.conf');

// public
module.exports = function (config) {
  baseConfig({
    set: function (base) {
      base.browsers = [
        'firefox-48',
        'firefox-47',
        'firefox-46',
        'firefox-45',
        'firefox-44',
        'firefox-43',
        'firefox-42',
        'firefox-41',
        'firefox-40',
        'firefox-39',
        'firefox-38',
        'firefox-37',
        'firefox-36',
        'firefox-35',
        'firefox-34',
        'firefox-33',
        'firefox-32',
        'firefox-31',
        'firefox-30',
        'firefox-29',
        'firefox-28',
        'firefox-27',
        'firefox-26',
        'firefox-25',
        'firefox-24',
        'firefox-23',
        'firefox-22',
        'firefox-21',
        'firefox-20',
        'firefox-19',
        'firefox-18',
        'firefox-17',
        'firefox-16',
        'firefox-15',
        'firefox-14',
        'firefox-13',
        'firefox-12',
        'firefox-11',
        'firefox-10',
        'firefox-9',
        'firefox-8',
        'firefox-7',
        'firefox-6',
        'firefox-5',
        'firefox-4'
      ];
      config.set(base);
    }
  });
};
