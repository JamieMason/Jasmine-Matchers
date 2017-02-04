// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeEvenNumber = require('./toBeEvenNumber');

// public
module.exports = memberMatcherFor(toBeEvenNumber);
