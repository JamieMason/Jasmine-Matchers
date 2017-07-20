const toBeObject = require('./toBeObject');
const toBeWithinRange = require('./toBeWithinRange');

module.exports = (key, floor, ceiling, actual) => toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
