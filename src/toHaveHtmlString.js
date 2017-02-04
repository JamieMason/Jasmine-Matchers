// modules
const toBeObject = require('./toBeObject');
const toBeHtmlString = require('./toBeHtmlString');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeHtmlString(actual[key]);
