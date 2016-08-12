// modules
var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

// public
module.exports = function toHaveMember(key, actual) {
  return toBeString(key) && toBeObject(actual) && key in actual;
};
