// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeObject = require('./toBeObject');

// public
module.exports = function toBeArrayOfBooleans(actual) {
  return toBeArray(actual) && every(actual, toBeObject);
};
