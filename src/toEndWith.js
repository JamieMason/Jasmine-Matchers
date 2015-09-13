'use strict';

var toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = toEndWith;

function toEndWith(subString, actual) {
    if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
        return false;
    }
    return actual.slice(actual.length - subString.length, actual.length) === subString;
}
