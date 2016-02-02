'use strict';

module.exports = function(config) {

    require('./karma.conf')({

        set: function(base) {

            base.customLaunchers = {
                // mobile
                'android-4.4': {
                    base: 'SauceLabs',
                    browserName: 'android',
                    platform: 'Linux',
                    version: '4.4'
                },
                'android-5.1': {
                    base: 'SauceLabs',
                    browserName: 'android',
                    platform: 'Linux',
                    version: '5.1'
                },
                'ios-9.2': {
                    base: 'SauceLabs',
                    browserName: 'iphone',
                    platform: 'OS X 10.10',
                    version: '9.2'
                },
                'ios-8.4': {
                    base: 'SauceLabs',
                    browserName: 'iphone',
                    platform: 'OS X 10.10',
                    version: '8.4'
                },
                'ios-8.0': {
                    base: 'SauceLabs',
                    browserName: 'iphone',
                    platform: 'OS X 10.10',
                    version: '8.0'
                },
                // desktop
                winChrome47: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'Windows 10',
                    version: '47'
                },
                osxSafari9: {
                    base: 'SauceLabs',
                    browserName: 'safari',
                    platform: 'OS X 10.11',
                    version: '9.0'
                },
                osxSafari8: {
                    base: 'SauceLabs',
                    browserName: 'safari',
                    platform: 'OS X 10.10',
                    version: '8.0'
                },
                osxFirefox43: {
                    base: 'SauceLabs',
                    browserName: 'firefox',
                    platform: 'OS X 10.10',
                    version: '43.0'
                },
                osxFirefox40: {
                    base: 'SauceLabs',
                    browserName: 'firefox',
                    platform: 'OS X 10.10',
                    version: '40.0'
                },
                // IE
                winIe11: {
                    base: 'SauceLabs',
                    browserName: 'internet explorer',
                    platform: 'Windows 8.1',
                    version: '11'
                },
                winIe10: {
                    base: 'SauceLabs',
                    browserName: 'iehta',
                    platform: 'Windows 7',
                    version: '10'
                },
                winIe9: {
                    base: 'SauceLabs',
                    browserName: 'iehta',
                    platform: 'Windows 7',
                    version: '9'
                }
            };

            base.browsers = Object.keys(base.customLaunchers);

            base.singleRun = true;

            base.reporters = [
                'dots',
                'saucelabs'
            ];

            base.sauceLabs = {
                testName: 'Jasmine Matchers ' + require('./package.json').version
            };

            config.set(base);

        }

    });

};
