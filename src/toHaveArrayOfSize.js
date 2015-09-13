'use strict';

var toBeObject = require('./toBeObject');
var toBeArrayOfSize = require('./toBeArrayOfSize');

module.exports = toHaveArrayOfSize;

function toHaveArrayOfSize(key, size, actual) {
    return toBeObject(actual) &&
        toBeArrayOfSize(size, actual[key]);
}
