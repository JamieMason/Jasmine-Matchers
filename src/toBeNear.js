// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toBeNear(near, epsilon, actual) {
  return toBeNumber(actual) && actual >= near - epsilon && actual <= near + epsilon;
};
