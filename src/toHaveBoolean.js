'use strict';

var toBeObject = require('./toBeObject');
var toBeBoolean = require('./toBeBoolean');

module.exports = toHaveBoolean;

function toHaveBoolean(key, actual) {
    return toBeObject(actual) &&
        toBeBoolean(actual[key]);
}
