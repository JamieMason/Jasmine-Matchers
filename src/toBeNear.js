// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeNear(number, epsilon, actual) {
  return toBeNumber(actual) && actual >= number - epsilon && actual <= number + epsilon;
};
