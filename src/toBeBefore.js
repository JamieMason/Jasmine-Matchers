'use strict';

var toBeDate = require('./toBeDate');

module.exports = toBeBefore;

function toBeBefore(otherDate, actual) {
    return toBeDate(actual) &&
        toBeDate(otherDate) &&
        actual.getTime() < otherDate.getTime();
}
