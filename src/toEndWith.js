// modules
const toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = (subString, actual) => {
  if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
    return false;
  }
  return actual.slice(actual.length - subString.length, actual.length) === subString;
};
