module.exports = function(config) {

  'use strict';

  require('./karma.conf')({

    set: function(base) {

      base.browsers = [
        'Firefox',
        'Opera',
        'PhantomJS',
        'Safari'
      ];

      config.set(base);

    }

  });

};
