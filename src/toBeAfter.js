// modules
var toBeBefore = require('./toBeBefore');

// public
module.exports = function toBeAfter(otherDate, actual) {
  return toBeBefore(actual, otherDate);
};
