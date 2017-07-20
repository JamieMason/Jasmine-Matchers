const toBeObject = require('./toBeObject');
const toBeString = require('./toBeString');

module.exports = (key, actual) => toBeString(key) && toBeObject(actual) && key in actual;
