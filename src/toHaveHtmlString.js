'use strict';

var toBeObject = require('./toBeObject');
var toBeHtmlString = require('./toBeHtmlString');

module.exports = toHaveHtmlString;

function toHaveHtmlString(key, actual) {
    return toBeObject(actual) &&
        toBeHtmlString(actual[key]);
}
