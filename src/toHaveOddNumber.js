'use strict';

var toBeObject = require('./toBeObject');
var toBeOddNumber = require('./toBeOddNumber');

module.exports = toHaveOddNumber;

function toHaveOddNumber(key, actual) {
    return toBeObject(actual) &&
        toBeOddNumber(actual[key]);
}
