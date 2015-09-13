'use strict';

var toBeObject = require('./toBeObject');
var toBeCalculable = require('./toBeCalculable');

module.exports = toHaveCalculable;

function toHaveCalculable(key, actual) {
    return toBeObject(actual) &&
        toBeCalculable(actual[key]);
}
