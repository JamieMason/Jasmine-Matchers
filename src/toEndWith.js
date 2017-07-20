const toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = (subString, actual) => toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.slice(actual.length - subString.length, actual.length) === subString;
