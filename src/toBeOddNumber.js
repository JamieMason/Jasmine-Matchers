'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = toBeOddNumber;

function toBeOddNumber(actual) {
    return toBeNumber(actual) &&
        actual % 2 !== 0;
}
