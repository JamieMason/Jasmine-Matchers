// modules
const every = require('./lib/every');
const toBeArray = require('./toBeArray');
const toBeString = require('./toBeString');

// public
module.exports = actual => toBeArray(actual) && every(actual, toBeString);
