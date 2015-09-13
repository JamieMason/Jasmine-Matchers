'use strict';

var toBeObject = require('./toBeObject');
var toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

module.exports = toHaveArrayOfNumbers;

function toHaveArrayOfNumbers(key, actual) {
    return toBeObject(actual) &&
        toBeArrayOfNumbers(actual[key]);
}
