const toBeObject = require('./toBeObject');
const toBeLongerThan = require('./toBeLongerThan');

module.exports = (key, other, actual) => toBeObject(actual) && toBeLongerThan(other, actual[key]);
