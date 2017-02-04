// modules
const toBeString = require('./toBeString');

// public
module.exports = actual => toBeString(actual) && actual.length > 0;
