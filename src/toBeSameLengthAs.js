'use strict';

var toBeString = require('./toBeString');

module.exports = toBeSameLengthAs;

function toBeSameLengthAs(otherString, actual) {
    return toBeString(actual) &&
        toBeString(otherString) &&
        actual.length === otherString.length;
}
