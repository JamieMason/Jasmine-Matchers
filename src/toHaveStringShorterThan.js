// modules
var toBeObject = require('./toBeObject');
var toBeShorterThan = require('./toBeShorterThan');

// public
module.exports = function toHaveStringShorterThan(key, other, actual) {
  return toBeObject(actual) && toBeShorterThan(other, actual[key]);
};
