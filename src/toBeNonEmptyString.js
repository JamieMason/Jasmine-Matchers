const toBeString = require('./toBeString');

module.exports = actual => toBeString(actual) && actual.length > 0;
