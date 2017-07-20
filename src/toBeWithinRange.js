const toBeNumber = require('./toBeNumber');

module.exports = (floor, ceiling, actual) => toBeNumber(actual) && actual >= floor && actual <= ceiling;
