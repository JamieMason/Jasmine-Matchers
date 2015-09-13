'use strict';

var toBeObject = require('./toBeObject');
var toBeNumber = require('./toBeNumber');

module.exports = toHaveNumber;

function toHaveNumber(key, actual) {
    return toBeObject(actual) &&
        toBeNumber(actual[key]);
}
