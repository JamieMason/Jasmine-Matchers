// modules
const toBeObject = require('./toBeObject');
const toBeEmptyArray = require('./toBeEmptyArray');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeEmptyArray(actual[key]);
