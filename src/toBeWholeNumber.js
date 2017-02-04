// modules
const toBeNumber = require('./toBeNumber');

// public
module.exports = actual => toBeNumber(actual) && (actual === 0 || actual % 1 === 0);
