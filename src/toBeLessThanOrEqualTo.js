'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = toBeLessThanOrEqualTo;

function toBeLessThanOrEqualTo(otherNumber, actual) {
    return toBeNumber(actual) && actual <= otherNumber;
}
