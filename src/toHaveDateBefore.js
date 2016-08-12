// modules
var toBeObject = require('./toBeObject');
var toBeBefore = require('./toBeBefore');

// public
module.exports = function toHaveDateBefore(key, date, actual) {
  return toBeObject(actual) && toBeBefore(date, actual[key]);
};
