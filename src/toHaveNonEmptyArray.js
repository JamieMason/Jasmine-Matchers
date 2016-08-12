// modules
var toBeObject = require('./toBeObject');
var toBeNonEmptyArray = require('./toBeNonEmptyArray');

// public
module.exports = function toHaveNonEmptyArray(key, actual) {
  return toBeObject(actual) && toBeNonEmptyArray(actual[key]);
};
