'use strict';

var toBeObject = require('./toBeObject');
var toBeNonEmptyArray = require('./toBeNonEmptyArray');

module.exports = toHaveNonEmptyArray;

function toHaveNonEmptyArray(key, actual) {
    return toBeObject(actual) &&
        toBeNonEmptyArray(actual[key]);
}
