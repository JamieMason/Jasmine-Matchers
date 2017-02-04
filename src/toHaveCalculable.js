// modules
const toBeObject = require('./toBeObject');
const toBeCalculable = require('./toBeCalculable');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeCalculable(actual[key]);
