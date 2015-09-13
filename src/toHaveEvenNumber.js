'use strict';

var toBeObject = require('./toBeObject');
var toBeEvenNumber = require('./toBeEvenNumber');

module.exports = toHaveEvenNumber;

function toHaveEvenNumber(key, actual) {
    return toBeObject(actual) &&
        toBeEvenNumber(actual[key]);
}
