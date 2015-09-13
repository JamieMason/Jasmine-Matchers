'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = toBeWithinRange;

function toBeWithinRange(floor, ceiling, actual) {
    return toBeNumber(actual) &&
        actual >= floor &&
        actual <= ceiling;
}
