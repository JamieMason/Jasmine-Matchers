'use strict';

var toBeObject = require('./toBeObject');
var toBeIso8601 = require('./toBeIso8601');

module.exports = toHaveIso8601;

function toHaveIso8601(key, actual) {
    return toBeObject(actual) &&
        toBeIso8601(actual[key]);
}
