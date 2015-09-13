'use strict';

module.exports = function(config) {

    require('./karma.conf')({

        set: function(base) {

            base.browsers = [
                'bin/opera-emulator'
            ];

            config.set(base);

        }

    });

};
