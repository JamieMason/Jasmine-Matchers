// modules
const toBeString = require('./toBeString');

// public
module.exports = (otherString, actual) => toBeString(actual) && toBeString(otherString) && actual.length === otherString.length;
