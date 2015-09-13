'use strict';

var toBeString = require('./toBeString');

module.exports = toBeShorterThan;

function toBeShorterThan(otherString, actual) {
    return toBeString(actual) &&
        toBeString(otherString) &&
        actual.length < otherString.length;
}
