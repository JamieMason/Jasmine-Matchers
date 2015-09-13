'use strict';

var toBeObject = require('./toBeObject');
var toBeEmptyArray = require('./toBeEmptyArray');

module.exports = toHaveEmptyArray;

function toHaveEmptyArray(key, actual) {
    return toBeObject(actual) &&
        toBeEmptyArray(actual[key]);
}
