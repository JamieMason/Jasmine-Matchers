// modules
const toBeObject = require('./toBeObject');
const toBeArrayOfStrings = require('./toBeArrayOfStrings');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeArrayOfStrings(actual[key]);
