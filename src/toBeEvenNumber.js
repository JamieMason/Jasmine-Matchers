'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = toBeEvenNumber;

function toBeEvenNumber(actual) {
    return toBeNumber(actual) &&
        actual % 2 === 0;
}
