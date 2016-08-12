// modules
var toBeObject = require('./toBeObject');
var toBeNumber = require('./toBeNumber');

// public
module.exports = function toHaveNumber(key, actual) {
  return toBeObject(actual) && toBeNumber(actual[key]);
};
