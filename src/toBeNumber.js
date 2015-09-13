'use strict';

var is = require('./lib/is');

module.exports = toBeNumber;

function toBeNumber(actual) {
    return !isNaN(parseFloat(actual)) &&
        !is(actual, 'String');
}
