'use strict';

var toBeString = require('./toBeString');

module.exports = toBeWhitespace;

function toBeWhitespace(actual) {
    return toBeString(actual) &&
        actual.search(/\S/) === -1;
}
