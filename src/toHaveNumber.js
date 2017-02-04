// modules
const toBeObject = require('./toBeObject');
const toBeNumber = require('./toBeNumber');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeNumber(actual[key]);
