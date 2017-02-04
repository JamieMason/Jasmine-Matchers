// modules
const toBeObject = require('./toBeObject');
const toBeString = require('./toBeString');

// public
module.exports = (key, actual) => toBeString(key) && toBeObject(actual) && key in actual;
