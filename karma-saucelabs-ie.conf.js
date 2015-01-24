module.exports = function(config) {

  'use strict';

  var customLaunchers = {
    'sl_ie_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    'sl_ie_10': {
      base: 'SauceLabs',
      browserName: 'iehta',
      platform: 'Windows 7',
      version: '10'
    },
    'sl_ie_9': {
      base: 'SauceLabs',
      browserName: 'iehta',
      platform: 'Windows 7',
      version: '9'
    },
    'sl_ie_8': {
      base: 'SauceLabs',
      browserName: 'iehta',
      platform: 'Windows XP',
      version: '8'
    },
    'sl_ie_7': {
      base: 'SauceLabs',
      browserName: 'iehta',
      platform: 'Windows XP',
      version: '7'
    }
  };

  require('./karma-saucelabs.conf')({

    set: function(base) {

      base.customLaunchers = customLaunchers;

      base.browsers = Object.keys(customLaunchers);

      config.set(base);

    }

  });

};
