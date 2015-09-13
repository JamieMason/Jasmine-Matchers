'use strict';

module.exports = function(config) {

    require('./karma.conf')({

        set: function(base) {

            base.browsers = [
                'bin/ievms-ie8'
            ];

            config.set(base);

        }

    });

};
