// modules
var toBeObject = require('./toBeObject');
var toBeEvenNumber = require('./toBeEvenNumber');

// public
module.exports = function toHaveEvenNumber(key, actual) {
  return toBeObject(actual) && toBeEvenNumber(actual[key]);
};
