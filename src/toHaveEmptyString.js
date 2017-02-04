// modules
const toBeObject = require('./toBeObject');
const toBeEmptyString = require('./toBeEmptyString');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeEmptyString(actual[key]);
