// modules
const toBeObject = require('./toBeObject');
const toBeString = require('./toBeString');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeString(actual[key]);
