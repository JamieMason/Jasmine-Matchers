'use strict';

module.exports = {
    1: forActual,
    2: forActualAndExpected,
    3: forActualAndTwoExpected
};

function forActual(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, optionalMessage) {
                var passes = matcher(actual);
                return {
                    pass: passes,
                    message: (
                    optionalMessage ?
                        util.buildFailureMessage(name, passes, actual, optionalMessage) :
                        util.buildFailureMessage(name, passes, actual)
                    )
                };
            }
        };
    };
}

function forActualAndExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, expected, optionalMessage) {
                var passes = matcher(expected, actual);
                return {
                    pass: passes,
                    message: (
                    optionalMessage ?
                        util.buildFailureMessage(name, passes, actual, expected, optionalMessage) :
                        util.buildFailureMessage(name, passes, actual, expected)
                    )
                };
            }
        };
    };
}

function forActualAndTwoExpected(name, matcher) {
    return function(util) {
        return {
            compare: function(actual, expected1, expected2, optionalMessage) {
                var passes = matcher(expected1, expected2, actual);
                return {
                    pass: passes,
                    message: (
                    optionalMessage ?
                        util.buildFailureMessage(name, passes, actual, expected1, expected2, optionalMessage) :
                        util.buildFailureMessage(name, passes, actual, expected1, expected2)
                    )
                };
            }
        };
    };
}
