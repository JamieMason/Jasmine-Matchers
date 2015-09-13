'use strict';

var toBeObject = require('./toBeObject');
var toBeWithinRange = require('./toBeWithinRange');

module.exports = toHaveNumberWithinRange;

function toHaveNumberWithinRange(key, floor, ceiling, actual) {
    return toBeObject(actual) &&
        toBeWithinRange(floor, ceiling, actual[key]);
}
