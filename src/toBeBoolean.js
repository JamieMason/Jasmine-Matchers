'use strict';

var is = require('./lib/is');

module.exports = toBeBoolean;

function toBeBoolean(actual) {
    return is(actual, 'Boolean');
}
