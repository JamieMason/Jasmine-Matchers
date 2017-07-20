const every = require('./lib/every');
const toBeArray = require('./toBeArray');
const toBeBoolean = require('./toBeBoolean');

module.exports = actual => toBeArray(actual) && every(actual, toBeBoolean);
