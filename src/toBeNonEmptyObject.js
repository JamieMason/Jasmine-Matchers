'use strict';

var keys = require('./lib/keys');
var is = require('./lib/is');

module.exports = toBeNonEmptyObject;

function toBeNonEmptyObject(actual) {
    return is(actual, 'Object') &&
        keys(actual).length > 0;
}
