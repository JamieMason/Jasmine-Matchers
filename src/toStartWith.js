// modules
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = function toStartWith(subString, actual) {
  if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
    return false;
  }
  return actual.slice(0, subString.length) === subString;
};
