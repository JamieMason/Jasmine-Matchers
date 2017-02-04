// modules
const toBeObject = require('./toBeObject');
const toBeTrue = require('./toBeTrue');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeTrue(actual[key]);
