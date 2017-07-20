const toBeNumber = require('./toBeNumber');

module.exports = actual => toBeNumber(actual) && actual % 2 === 0;
