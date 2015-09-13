'use strict';

var toBeObject = require('./toBeObject');
var toBeDate = require('./toBeDate');

module.exports = toHaveDate;

function toHaveDate(key, actual) {
    return toBeObject(actual) &&
        toBeDate(actual[key]);
}
