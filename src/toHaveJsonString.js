'use strict';

var toBeObject = require('./toBeObject');
var toBeJsonString = require('./toBeJsonString');

module.exports = toHaveJsonString;

function toHaveJsonString(key, actual) {
    return toBeObject(actual) &&
        toBeJsonString(actual[key]);
}
