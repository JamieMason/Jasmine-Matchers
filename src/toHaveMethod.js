'use strict';

var toBeObject = require('./toBeObject');
var toBeFunction = require('./toBeFunction');

module.exports = toHaveMethod;

function toHaveMethod(key, actual) {
    return toBeObject(actual) &&
        toBeFunction(actual[key]);
}
