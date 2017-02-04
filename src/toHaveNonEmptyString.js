// modules
const toBeObject = require('./toBeObject');
const toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeNonEmptyString(actual[key]);
