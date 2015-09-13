'use strict';

var toBeObject = require('./toBeObject');

module.exports = toHaveObject;

function toHaveObject(key, actual) {
    return toBeObject(actual) &&
        toBeObject(actual[key]);
}
