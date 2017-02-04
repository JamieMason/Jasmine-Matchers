// modules
const toBeObject = require('./toBeObject');
const toBeJsonString = require('./toBeJsonString');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeJsonString(actual[key]);
