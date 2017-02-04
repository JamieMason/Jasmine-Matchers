// modules
const toBeObject = require('./toBeObject');
const toBeArray = require('./toBeArray');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeArray(actual[key]);
