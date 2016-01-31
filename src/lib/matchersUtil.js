'use strict';

var matchersUtil = {
    formatErrorMessage: function(name, message, key) {
        if (name.search(/^toHave/) !== -1) {
            return message
                .replace('Expected', 'Expected member "' + key + '" of')
                .replace(' to have ', ' to be ');
        }
        return message;
    }
};

module.exports = matchersUtil;
