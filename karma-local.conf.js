'use strict';

module.exports = function(config) {

    require('./karma.conf')({

        set: function(base) {

            base.browsers = [
                'Firefox',
                'Chrome',
                'Opera',
                'PhantomJS',
                'Safari'
            ];

            config.set(base);

        }

    });

};
