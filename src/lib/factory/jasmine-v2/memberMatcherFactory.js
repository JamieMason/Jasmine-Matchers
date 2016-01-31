'use strict';

var matchersUtil = require('../../matchersUtil.js');

module.exports = {
    2: forKeyAndActual,
    3: forKeyAndActualAndExpected,
    4: forKeyAndActualAndTwoExpected
};

function forKeyAndActual(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, key, optionalMessage) {
                var passes = matcher(key, actual);
                var message = name.search(/^toHave/) !== -1 ? key : optionalMessage;
                return {
                    pass: passes,
                    message: (
                    message ?
                        util.buildFailureMessage(name, passes, actual, message) :
                        util.buildFailureMessage(name, passes, actual)
                    )
                };
            }
        };
    };
}

function forKeyAndActualAndExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, key, expected, optionalMessage) {
                var passes = matcher(key, expected, actual);
                var message = (optionalMessage ?
                    util.buildFailureMessage(name, passes, actual, expected, optionalMessage) :
                    util.buildFailureMessage(name, passes, actual, expected)
                );

                return {
                    pass: passes,
                    message: matchersUtil.formatErrorMessage(name, message, key)
                };
            }
        };
    };
}

function forKeyAndActualAndTwoExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, key, expected1, expected2, optionalMessage) {
                var passes = matcher(key, expected1, expected2, actual);
                var message = (optionalMessage ?
                    util.buildFailureMessage(name, passes, actual, expected1, expected2, optionalMessage) :
                    util.buildFailureMessage(name, passes, actual, expected1, expected2)
                );

                return {
                    pass: passes,
                    message: matchersUtil.formatErrorMessage(name, message, key)
                };
            }
        };
    };
}
