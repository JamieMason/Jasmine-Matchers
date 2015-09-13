'use strict';

var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeString = require('./toBeString');

module.exports = toBeArrayOfStrings;

function toBeArrayOfStrings(actual) {
    return toBeArray(actual) &&
        every(actual, toBeString);
}
