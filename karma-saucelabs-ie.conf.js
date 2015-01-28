module.exports = function(config) {

  'use strict';

  var customLaunchers = {
    'sl_ie_11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
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
