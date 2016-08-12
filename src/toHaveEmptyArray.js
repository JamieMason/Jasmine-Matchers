// modules
var toBeObject = require('./toBeObject');
var toBeEmptyArray = require('./toBeEmptyArray');

// public
module.exports = function toHaveEmptyArray(key, actual) {
  return toBeObject(actual) && toBeEmptyArray(actual[key]);
};
