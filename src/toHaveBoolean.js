// modules
const toBeObject = require('./toBeObject');
const toBeBoolean = require('./toBeBoolean');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeBoolean(actual[key]);
