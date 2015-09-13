'use strict';

var toBeObject = require('./toBeObject');
var toBeArrayOfStrings = require('./toBeArrayOfStrings');

module.exports = toHaveArrayOfStrings;

function toHaveArrayOfStrings(key, actual) {
    return toBeObject(actual) &&
        toBeArrayOfStrings(actual[key]);
}
