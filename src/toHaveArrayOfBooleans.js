'use strict';

var toBeObject = require('./toBeObject');
var toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

module.exports = toHaveArrayOfBooleans;

function toHaveArrayOfBooleans(key, actual) {
    return toBeObject(actual) &&
        toBeArrayOfBooleans(actual[key]);
}
