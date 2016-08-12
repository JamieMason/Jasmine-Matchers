// modules
var toBeObject = require('./toBeObject');

// public
module.exports = function toHaveObject(key, actual) {
  return toBeObject(actual) && toBeObject(actual[key]);
};
