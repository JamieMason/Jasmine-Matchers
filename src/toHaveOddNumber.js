const toBeObject = require('./toBeObject');
const toBeOddNumber = require('./toBeOddNumber');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeOddNumber(actual[key]);
