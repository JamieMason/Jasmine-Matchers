// modules
var toBeObject = require('./toBeObject');
var toBeBoolean = require('./toBeBoolean');

// public
module.exports = function toHaveBoolean(key, actual) {
  return toBeObject(actual) && toBeBoolean(actual[key]);
};
