'use strict';

var toBeString = require('./toBeString');

module.exports = toBeLongerThan;

function toBeLongerThan(otherString, actual) {
    return toBeString(actual) &&
        toBeString(otherString) &&
        actual.length > otherString.length;
}
