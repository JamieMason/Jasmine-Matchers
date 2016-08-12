// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeLessThanOrEqualTo(otherNumber, actual) {
  return toBeNumber(actual) && actual <= otherNumber;
};
