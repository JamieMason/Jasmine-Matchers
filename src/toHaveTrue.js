'use strict';

var toBeObject = require('./toBeObject');
var toBeTrue = require('./toBeTrue');

module.exports = toHaveTrue;

function toHaveTrue(key, actual) {
    return toBeObject(actual) &&
        toBeTrue(actual[key]);
}
