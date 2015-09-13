'use strict';

var is = require('./lib/is');

module.exports = toBeString;

function toBeString(actual) {
    return is(actual, 'String');
}
