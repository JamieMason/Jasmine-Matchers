// modules
const toBeObject = require('./toBeObject');
const toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeArrayOfNumbers(actual[key]);
