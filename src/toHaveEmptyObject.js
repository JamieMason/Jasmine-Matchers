// modules
const toBeObject = require('./toBeObject');
const toBeEmptyObject = require('./toBeEmptyObject');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeEmptyObject(actual[key]);
