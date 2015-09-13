'use strict';

var toBeBefore = require('./toBeBefore');

module.exports = toBeAfter;

function toBeAfter(otherDate, actual) {
    return toBeBefore(actual, otherDate);
}
