'use strict';

var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeNumber = require('./toBeNumber');

module.exports = toBeArrayOfBooleans;

function toBeArrayOfBooleans(actual) {
    return toBeArray(actual) &&
        every(actual, toBeNumber);
}
