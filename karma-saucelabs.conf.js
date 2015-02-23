module.exports = function(config) {

  'use strict';

  require('./karma.conf')({

    set: function(base) {

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
