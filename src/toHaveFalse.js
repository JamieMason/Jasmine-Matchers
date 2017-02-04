// modules
const toBeObject = require('./toBeObject');
const toBeFalse = require('./toBeFalse');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeFalse(actual[key]);
