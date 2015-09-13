'use strict';

var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

module.exports = toHaveMember;

function toHaveMember(key, actual) {
    return toBeString(key) &&
        toBeObject(actual) &&
        key in actual;
}
