// modules
var toBeObject = require('./toBeObject');
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = function toHaveNonEmptyString(key, actual) {
  return toBeObject(actual) && toBeNonEmptyString(actual[key]);
};
