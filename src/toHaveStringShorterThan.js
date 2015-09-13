'use strict';

var toBeObject = require('./toBeObject');
var toBeShorterThan = require('./toBeShorterThan');

module.exports = toHaveStringShorterThan;

function toHaveStringShorterThan(key, other, actual) {
    return toBeObject(actual) &&
        toBeShorterThan(other, actual[key]);
}
