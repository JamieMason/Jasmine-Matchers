// modules
const toBeObject = require('./toBeObject');
const toBeFunction = require('./toBeFunction');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeFunction(actual[key]);
