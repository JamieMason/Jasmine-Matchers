const toBeNumber = require('./toBeNumber');

module.exports = (otherNumber, actual) => toBeNumber(actual) && actual <= otherNumber;
