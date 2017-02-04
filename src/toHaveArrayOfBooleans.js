// modules
const toBeObject = require('./toBeObject');
const toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeArrayOfBooleans(actual[key]);
