const toBeArray = require('./toBeArray');

module.exports = (size, actual) => toBeArray(actual) && actual.length === size;
