'use strict';

var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeBoolean = require('./toBeBoolean');

module.exports = toBeArrayOfBooleans;

function toBeArrayOfBooleans(actual) {
    return toBeArray(actual) &&
        every(actual, toBeBoolean);
}
