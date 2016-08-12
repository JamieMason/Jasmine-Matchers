// modules
var toBeObject = require('./toBeObject');
var toBeLongerThan = require('./toBeLongerThan');

// public
module.exports = function toHaveStringLongerThan(key, other, actual) {
  return toBeObject(actual) && toBeLongerThan(other, actual[key]);
};
