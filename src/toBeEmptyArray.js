// modules
var toBeArrayOfSize = require('./toBeArrayOfSize');

// public
module.exports = function toBeEmptyArray(actual) {
  return toBeArrayOfSize(0, actual);
};
