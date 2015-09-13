'use strict';

var is = require('./lib/is');

module.exports = toBeObject;

function toBeObject(actual) {
    return is(actual, 'Object');
}
