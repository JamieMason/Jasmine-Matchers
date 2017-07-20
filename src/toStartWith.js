const toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = (subString, actual) => toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.slice(0, subString.length) === subString;
