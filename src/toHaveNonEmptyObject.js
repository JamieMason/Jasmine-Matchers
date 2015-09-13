'use strict';

var toBeObject = require('./toBeObject');
var toBeNonEmptyObject = require('./toBeNonEmptyObject');

module.exports = toHaveNonEmptyObject;

function toHaveNonEmptyObject(key, actual) {
    return toBeObject(actual) &&
        toBeNonEmptyObject(actual[key]);
}
