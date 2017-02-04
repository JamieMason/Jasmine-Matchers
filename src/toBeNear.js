// modules
const toBeNumber = require('./toBeNumber');

// public
module.exports = (number, epsilon, actual) => toBeNumber(actual) && actual >= number - epsilon && actual <= number + epsilon;
