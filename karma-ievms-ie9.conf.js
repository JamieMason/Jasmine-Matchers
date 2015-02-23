module.exports = function(config) {

  'use strict';

  require('./karma.conf')({

    set: function(base) {

      base.browsers = [
        'bin/ievms-ie9'
      ];

      config.set(base);

    }

  });

};
