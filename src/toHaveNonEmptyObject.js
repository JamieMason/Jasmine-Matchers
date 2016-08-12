// modules
var toBeObject = require('./toBeObject');
var toBeNonEmptyObject = require('./toBeNonEmptyObject');

// public
module.exports = function toHaveNonEmptyObject(key, actual) {
  return toBeObject(actual) && toBeNonEmptyObject(actual[key]);
};
