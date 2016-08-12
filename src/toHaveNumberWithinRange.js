// modules
var toBeObject = require('./toBeObject');
var toBeWithinRange = require('./toBeWithinRange');

// public
module.exports = function toHaveNumberWithinRange(key, floor, ceiling, actual) {
  return toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
};
