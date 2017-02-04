// modules
const toBeObject = require('./toBeObject');
const toBeWhitespace = require('./toBeWhitespace');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeWhitespace(actual[key]);
