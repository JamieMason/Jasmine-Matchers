// modules
var toBeObject = require('./toBeObject');
var toBeWholeNumber = require('./toBeWholeNumber');

// public
module.exports = function toHaveWholeNumber(key, actual) {
  return toBeObject(actual) && toBeWholeNumber(actual[key]);
};
