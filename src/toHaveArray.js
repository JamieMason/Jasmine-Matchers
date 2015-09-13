'use strict';

var toBeObject = require('./toBeObject');
var toBeArray = require('./toBeArray');

module.exports = toHaveArray;

function toHaveArray(key, actual) {
    return toBeObject(actual) &&
        toBeArray(actual[key]);
}
