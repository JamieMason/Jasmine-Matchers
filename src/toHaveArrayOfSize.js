// modules
const toBeObject = require('./toBeObject');
const toBeArrayOfSize = require('./toBeArrayOfSize');

// public
module.exports = (key, size, actual) => toBeObject(actual) && toBeArrayOfSize(size, actual[key]);
