// modules
const toBeObject = require('./toBeObject');
const toBeWholeNumber = require('./toBeWholeNumber');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeWholeNumber(actual[key]);
