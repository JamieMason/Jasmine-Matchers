'use strict';

var toBeObject = require('./toBeObject');
var toBeWholeNumber = require('./toBeWholeNumber');

module.exports = toHaveWholeNumber;

function toHaveWholeNumber(key, actual) {
    return toBeObject(actual) &&
        toBeWholeNumber(actual[key]);
}
