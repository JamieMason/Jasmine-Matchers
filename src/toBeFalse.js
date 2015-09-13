'use strict';

var is = require('./lib/is');

module.exports = toBeFalse;

function toBeFalse(actual) {
    return actual === false ||
        is(actual, 'Boolean') &&
        !actual.valueOf();
}
