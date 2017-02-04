// modules
const toBeObject = require('./toBeObject');
const toBeEvenNumber = require('./toBeEvenNumber');

// public
module.exports = (key, actual) => toBeObject(actual) && toBeEvenNumber(actual[key]);
