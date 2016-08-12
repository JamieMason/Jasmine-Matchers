// modules
var toBeObject = require('./toBeObject');
var toBeSameLengthAs = require('./toBeSameLengthAs');

// public
module.exports = function toHaveStringSameLengthAs(key, other, actual) {
  return toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
};
