'use strict';

var is = require('./lib/is');

module.exports = toBeArray;

function toBeArray(actual) {
    return is(actual, 'Array');
}
