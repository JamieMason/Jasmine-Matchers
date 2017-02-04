// modules
const toBeObject = require('./toBeObject');
const toBeShorterThan = require('./toBeShorterThan');

// public
module.exports = (key, other, actual) => toBeObject(actual) && toBeShorterThan(other, actual[key]);
