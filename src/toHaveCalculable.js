// modules
var toBeObject = require('./toBeObject');
var toBeCalculable = require('./toBeCalculable');

// public
module.exports = function toHaveCalculable(key, actual) {
  return toBeObject(actual) && toBeCalculable(actual[key]);
};
