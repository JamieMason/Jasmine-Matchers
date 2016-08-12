// modules
var toBeString = require('./toBeString');

// public
module.exports = function toBeSameLengthAs(otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length === otherString.length;
};
