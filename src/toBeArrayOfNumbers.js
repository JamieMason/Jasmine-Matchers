const every = require('./lib/every');
const toBeArray = require('./toBeArray');
const toBeNumber = require('./toBeNumber');

module.exports = actual => toBeArray(actual) && every(actual, toBeNumber);
