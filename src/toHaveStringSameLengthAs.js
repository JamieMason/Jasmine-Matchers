const toBeObject = require('./toBeObject');
const toBeSameLengthAs = require('./toBeSameLengthAs');

module.exports = (key, other, actual) => toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
