'use strict';

var toBeArray = require('./toBeArray');

module.exports = toBeArrayOfSize;

function toBeArrayOfSize(size, actual) {
    return toBeArray(actual) &&
        actual.length === size;
}
