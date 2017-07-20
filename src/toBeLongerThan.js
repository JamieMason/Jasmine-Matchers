const toBeString = require('./toBeString');

module.exports = (otherString, actual) => toBeString(actual) && toBeString(otherString) && actual.length > otherString.length;
