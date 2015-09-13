'use strict';

var is = require('./lib/is');

module.exports = toBeTrue;

function toBeTrue(actual) {
    return actual === true ||
        is(actual, 'Boolean') &&
        actual.valueOf();
}
