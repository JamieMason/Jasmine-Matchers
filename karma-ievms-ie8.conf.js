module.exports = function(config) {

  'use strict';

  require('./karma.conf')({

    set: function(base) {

      base.browsers = [
        'bin/ievms-ie8'
      ];

      config.set(base);

    }

  });

};
