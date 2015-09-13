'use strict';

var toBeObject = require('./toBeObject');
var toBeEmptyObject = require('./toBeEmptyObject');

module.exports = toHaveEmptyObject;

function toHaveEmptyObject(key, actual) {
    return toBeObject(actual) &&
        toBeEmptyObject(actual[key]);
}
