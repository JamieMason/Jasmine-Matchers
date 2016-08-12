// modules
var toBeObject = require('./toBeObject');
var toBeDate = require('./toBeDate');

// public
module.exports = function toHaveDate(key, actual) {
  return toBeObject(actual) && toBeDate(actual[key]);
};
