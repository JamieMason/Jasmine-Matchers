// modules
const every = require('./lib/every');
const toBeArray = require('./toBeArray');
const toBeNumber = require('./toBeNumber');

// public
module.exports = actual => toBeArray(actual) && every(actual, toBeNumber);
