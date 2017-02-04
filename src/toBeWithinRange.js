// modules
const toBeNumber = require('./toBeNumber');

// public
module.exports = (floor, ceiling, actual) => toBeNumber(actual) && actual >= floor && actual <= ceiling;
