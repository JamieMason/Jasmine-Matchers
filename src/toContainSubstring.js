const toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = (subString, actual) => toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.indexOf(subString) > -1;
