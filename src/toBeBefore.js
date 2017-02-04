// modules
const toBeDate = require('./toBeDate');

// public
module.exports = (otherDate, actual) => toBeDate(actual) && toBeDate(otherDate) && actual.getTime() < otherDate.getTime();
