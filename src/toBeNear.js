const toBeNumber = require('./toBeNumber');

module.exports = (number, epsilon, actual) => toBeNumber(actual) && actual >= number - epsilon && actual <= number + epsilon;
