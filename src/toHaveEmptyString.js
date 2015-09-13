'use strict';

var toBeObject = require('./toBeObject');
var toBeEmptyString = require('./toBeEmptyString');

module.exports = toHaveEmptyString;

function toHaveEmptyString(key, actual) {
    return toBeObject(actual) &&
        toBeEmptyString(actual[key]);
}
