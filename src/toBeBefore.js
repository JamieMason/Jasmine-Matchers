const toBeDate = require('./toBeDate');

module.exports = (otherDate, actual) => toBeDate(actual) && toBeDate(otherDate) && actual.getTime() < otherDate.getTime();
