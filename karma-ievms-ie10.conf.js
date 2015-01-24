module.exports = function(config) {

  'use strict';

  require('./karma.conf')({

    set: function(base) {

      base.browsers = [
        'bin/ievms-ie10'
      ];

      config.set(base);

    }

  });

};
