// modules
const toBeString = require('./toBeString');

// public
module.exports = actual => toBeString(actual) && actual.search(/\S/) === -1;
