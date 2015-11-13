'use strict';

var is = require('./lib/is');

module.exports = toBeSet;

function toBeSet(actual) {
    return is(actual, 'Set');
}
