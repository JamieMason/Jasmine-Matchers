// modules
var toBeObject = require('./toBeObject');
var toBeFunction = require('./toBeFunction');

// public
module.exports = function toHaveMethod(key, actual) {
  return toBeObject(actual) && toBeFunction(actual[key]);
};
