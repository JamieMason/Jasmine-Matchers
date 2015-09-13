'use strict';

var toBeObject = require('./toBeObject');
var toBeLongerThan = require('./toBeLongerThan');

module.exports = toHaveStringLongerThan;

function toHaveStringLongerThan(key, other, actual) {
    return toBeObject(actual) &&
        toBeLongerThan(other, actual[key]);
}
