const every = require('./lib/every');
const toBeArray = require('./toBeArray');
const toBeString = require('./toBeString');

module.exports = actual => toBeArray(actual) && every(actual, toBeString);
