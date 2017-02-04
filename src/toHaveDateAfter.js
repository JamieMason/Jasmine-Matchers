// modules
const toBeObject = require('./toBeObject');
const toBeAfter = require('./toBeAfter');

// public
module.exports = (key, date, actual) => toBeObject(actual) && toBeAfter(date, actual[key]);
