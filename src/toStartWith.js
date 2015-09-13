'use strict';

var toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = toStartWith;

function toStartWith(subString, actual) {
    if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
        return false;
    }
    return actual.slice(0, subString.length) === subString;
}
