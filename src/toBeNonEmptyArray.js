'use strict';

var is = require('./lib/is');

module.exports = toBeNonEmptyArray;

function toBeNonEmptyArray(actual) {
    return is(actual, 'Array') &&
        actual.length > 0;
}
