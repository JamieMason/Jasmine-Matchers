const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeWholeNumber = require('./toBeWholeNumber');

module.exports = memberMatcherFor(toBeWholeNumber);
