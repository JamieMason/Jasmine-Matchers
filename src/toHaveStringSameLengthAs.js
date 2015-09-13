'use strict';

var toBeObject = require('./toBeObject');
var toBeSameLengthAs = require('./toBeSameLengthAs');

module.exports = toHaveStringSameLengthAs;

function toHaveStringSameLengthAs(key, other, actual) {
    return toBeObject(actual) &&
        toBeSameLengthAs(other, actual[key]);
}
