'use strict';

var toBeString = require('./toBeString');

module.exports = toBeNonEmptyString;

function toBeNonEmptyString(actual) {
    return toBeString(actual) &&
        actual.length > 0;
}
