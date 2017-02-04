// modules
const toBeObject = require('./toBeObject');
const toBeNonEmptyObject = require('./toBeNonEmptyObject');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeNonEmptyObject(actual[key]);
