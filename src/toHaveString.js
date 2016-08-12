// modules
var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

// public
module.exports = function toHaveString(key, actual) {
  return toBeObject(actual) && toBeString(actual[key]);
};
