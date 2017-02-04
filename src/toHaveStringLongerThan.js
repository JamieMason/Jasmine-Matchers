// modules
const toBeObject = require('./toBeObject');
const toBeLongerThan = require('./toBeLongerThan');

// public
module.exports = (key, other, actual) => toBeObject(actual) && toBeLongerThan(other, actual[key]);
