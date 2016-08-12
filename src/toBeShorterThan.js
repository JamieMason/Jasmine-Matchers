// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeShorterThan(otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length < otherString.length;
};
