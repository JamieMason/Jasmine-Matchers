// modules
const toBeArray = require('./toBeArray');

// public
module.exports = (size, actual) => toBeArray(actual) && actual.length === size;
