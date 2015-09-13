'use strict';

var toBeObject = require('./toBeObject');
var toBeFalse = require('./toBeFalse');

module.exports = toHaveFalse;

function toHaveFalse(key, actual) {
    return toBeObject(actual) &&
        toBeFalse(actual[key]);
}
