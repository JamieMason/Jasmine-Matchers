// modules
const toBeObject = require('./toBeObject');
const toBeNonEmptyArray = require('./toBeNonEmptyArray');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeNonEmptyArray(actual[key]);
