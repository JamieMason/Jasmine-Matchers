// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

// public
module.exports = function toHaveArrayOfNumbers(key, actual) {
  return toBeObject(actual) && toBeArrayOfNumbers(actual[key]);
};
