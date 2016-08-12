// modules
var toBeObject = require('./toBeObject');
var toBeJsonString = require('./toBeJsonString');

// public
module.exports = function toHaveJsonString(key, actual) {
  return toBeObject(actual) && toBeJsonString(actual[key]);
};
