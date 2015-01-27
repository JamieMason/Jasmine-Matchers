module.exports = function(config) {

  'use strict';

  require('./karma.conf')({

    set: function(base) {

      base.browsers = [
        'bin/opera-emulator'
      ];

      config.set(base);

    }

  });

};
