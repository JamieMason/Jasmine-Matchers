'use strict';

var toBeObject = require('./toBeObject');
var toBeBefore = require('./toBeBefore');

module.exports = toHaveDateBefore;

function toHaveDateBefore(key, date, actual) {
    return toBeObject(actual) &&
        toBeBefore(date, actual[key]);
}
