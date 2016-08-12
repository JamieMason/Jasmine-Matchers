// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeWithinRange(floor, ceiling, actual) {
  return toBeNumber(actual) && actual >= floor && actual <= ceiling;
};
