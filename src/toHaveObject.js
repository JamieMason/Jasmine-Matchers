// modules
const toBeObject = require('./toBeObject');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeObject(actual[key]);
