// modules
const toBeNumber = require('./toBeNumber');

// public
module.exports = actual => toBeNumber(actual) && actual % 2 !== 0;
