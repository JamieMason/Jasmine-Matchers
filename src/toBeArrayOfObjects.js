// modules
const every = require('./lib/every');
const toBeArray = require('./toBeArray');
const toBeObject = require('./toBeObject');

// public
module.exports = actual => toBeArray(actual) && every(actual, toBeObject);
