'use strict';

var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

module.exports = toHaveString;

function toHaveString(key, actual) {
    return toBeObject(actual) &&
        toBeString(actual[key]);
}
