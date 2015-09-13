'use strict';

var toBeArrayOfSize = require('./toBeArrayOfSize');

module.exports = toBeEmptyArray;

function toBeEmptyArray(actual) {
    return toBeArrayOfSize(0, actual);
}
