'use strict';

var matchersUtil = {
    formatErrorMessage: function(name, message, key) {
        if (name.search(/^toHave/) !== -1) {
            message = message.replace('Expected', 'Expected member "' + key + '" of').replace(' to have ', ' to be ');
        }

        return message;
    }
};

module.exports = matchersUtil;
