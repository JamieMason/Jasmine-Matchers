// modules
var toBeObject = require('./toBeObject');
var toBeTrue = require('./toBeTrue');

// public
module.exports = function toHaveTrue(key, actual) {
  return toBeObject(actual) && toBeTrue(actual[key]);
};
