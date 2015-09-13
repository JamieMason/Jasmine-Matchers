'use strict';

var keys = require('./lib/keys');
var is = require('./lib/is');

module.exports = toBeEmptyObject;

function toBeEmptyObject(actual) {
    return is(actual, 'Object') &&
        keys(actual).length === 0;
}
