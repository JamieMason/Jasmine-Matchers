// modules
var toBeObject = require('./toBeObject');
var toBeArray = require('./toBeArray');

// public
module.exports = function toHaveArray(key, actual) {
  return toBeObject(actual) && toBeArray(actual[key]);
};
