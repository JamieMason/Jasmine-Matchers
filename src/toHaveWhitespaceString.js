'use strict';

var toBeObject = require('./toBeObject');
var toBeWhitespace = require('./toBeWhitespace');

module.exports = toHaveWhitespaceString;

function toHaveWhitespaceString(key, actual) {
    return toBeObject(actual) &&
        toBeWhitespace(actual[key]);
}
