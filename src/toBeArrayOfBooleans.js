// modules
const every = require('./lib/every');
const toBeArray = require('./toBeArray');
const toBeBoolean = require('./toBeBoolean');

// public
module.exports = actual => toBeArray(actual) && every(actual, toBeBoolean);
