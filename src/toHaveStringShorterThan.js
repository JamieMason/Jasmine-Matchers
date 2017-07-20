const toBeObject = require('./toBeObject');
const toBeShorterThan = require('./toBeShorterThan');

module.exports = (key, other, actual) => toBeObject(actual) && toBeShorterThan(other, actual[key]);
