'use strict';

var toBeObject = require('./toBeObject');
var toBeArrayOfObjects = require('./toBeArrayOfObjects');

module.exports = toHaveArrayOfObjects;

function toHaveArrayOfObjects(key, actual) {
    return toBeObject(actual) &&
        toBeArrayOfObjects(actual[key]);
}
