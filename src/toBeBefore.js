// modules
var toBeDate = require('./toBeDate');

// public
module.exports = function toBeBefore(otherDate, actual) {
  return toBeDate(actual) && toBeDate(otherDate) && actual.getTime() < otherDate.getTime();
};
