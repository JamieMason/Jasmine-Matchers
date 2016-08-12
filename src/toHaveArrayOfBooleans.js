// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

// public
module.exports = function toHaveArrayOfBooleans(key, actual) {
  return toBeObject(actual) && toBeArrayOfBooleans(actual[key]);
};
