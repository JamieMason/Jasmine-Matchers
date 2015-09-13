'use strict';

var toBeObject = require('./toBeObject');
var toBeAfter = require('./toBeAfter');

module.exports = toHaveDateAfter;

function toHaveDateAfter(key, date, actual) {
    return toBeObject(actual) &&
        toBeAfter(date, actual[key]);
}
