// modules
const toBeNumber = require('./toBeNumber');

// public
module.exports = (otherNumber, actual) => toBeNumber(actual) && actual >= otherNumber;
