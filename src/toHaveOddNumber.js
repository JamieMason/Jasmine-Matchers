const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeOddNumber = require('./toBeOddNumber');

module.exports = memberMatcherFor(toBeOddNumber);
