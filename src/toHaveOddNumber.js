var toBeObject = require('./toBeObject');
var toBeOddNumber = require('./toBeOddNumber');

// public
module.exports = function toHaveOddNumber(key, actual) {
  return toBeObject(actual) && toBeOddNumber(actual[key]);
};
