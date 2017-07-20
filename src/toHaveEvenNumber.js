const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeEvenNumber = require('./toBeEvenNumber');

module.exports = memberMatcherFor(toBeEvenNumber);
