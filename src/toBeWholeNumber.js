const toBeNumber = require('./toBeNumber');

module.exports = actual => toBeNumber(actual) && (actual === 0 || actual % 1 === 0);
