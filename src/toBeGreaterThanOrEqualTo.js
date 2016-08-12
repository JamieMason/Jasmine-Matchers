// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeGreaterThanOrEqualTo(otherNumber, actual) {
  return toBeNumber(actual) && actual >= otherNumber;
};
