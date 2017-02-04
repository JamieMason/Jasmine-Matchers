// modules
const toBeObject = require('./toBeObject');
const toBeSameLengthAs = require('./toBeSameLengthAs');

// public
module.exports = (key, other, actual) => toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
