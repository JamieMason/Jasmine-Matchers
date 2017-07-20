const toBeString = require('./toBeString');

module.exports = actual => toBeString(actual) && actual.search(/\S/) === -1;
