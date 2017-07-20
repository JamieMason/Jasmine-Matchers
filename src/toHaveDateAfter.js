const toBeObject = require('./toBeObject');
const toBeAfter = require('./toBeAfter');

module.exports = (key, date, actual) => toBeObject(actual) && toBeAfter(date, actual[key]);
