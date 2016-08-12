// modules
var toBeObject = require('./toBeObject');
var toBeAfter = require('./toBeAfter');

// public
module.exports = function toHaveDateAfter(key, date, actual) {
  return toBeObject(actual) && toBeAfter(date, actual[key]);
};
