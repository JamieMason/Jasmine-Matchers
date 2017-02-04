// modules
const toBeObject = require('./toBeObject');
const toBeDate = require('./toBeDate');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeDate(actual[key]);
