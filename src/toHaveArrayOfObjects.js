// modules
const toBeObject = require('./toBeObject');
const toBeArrayOfObjects = require('./toBeArrayOfObjects');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeArrayOfObjects(actual[key]);
