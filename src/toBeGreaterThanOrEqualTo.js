'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = toBeGreaterThanOrEqualTo;

function toBeGreaterThanOrEqualTo(otherNumber, actual) {
  return toBeNumber(actual) && actual >= otherNumber;
}
