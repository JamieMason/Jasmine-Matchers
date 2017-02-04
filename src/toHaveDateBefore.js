// modules
const toBeObject = require('./toBeObject');
const toBeBefore = require('./toBeBefore');

// public
module.exports = (key, date, actual) => toBeObject(actual) && toBeBefore(date, actual[key]);
