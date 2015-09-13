'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = toBeWholeNumber;

function toBeWholeNumber(actual) {
    return toBeNumber(actual) && (
        actual === 0 || actual % 1 === 0
        );
}
