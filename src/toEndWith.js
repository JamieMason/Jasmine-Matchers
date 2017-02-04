// modules
const toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = (subString, actual) => toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.slice(actual.length - subString.length, actual.length) === subString;
