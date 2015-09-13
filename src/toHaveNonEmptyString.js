'use strict';

var toBeObject = require('./toBeObject');
var toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = toHaveNonEmptyString;

function toHaveNonEmptyString(key, actual) {
    return toBeObject(actual) &&
        toBeNonEmptyString(actual[key]);
}
