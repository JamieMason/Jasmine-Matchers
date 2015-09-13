'use strict';

module.exports = function(config) {

    require('./karma.conf')({

        set: function(base) {

            base.browsers = [
                'bin/ievms-ie9'
            ];

            config.set(base);

        }

    });

};
