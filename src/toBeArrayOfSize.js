// modules
var toBeArray = require('./toBeArray');

// public
module.exports = function toBeArrayOfSize(size, actual) {
  return toBeArray(actual) && actual.length === size;
};
