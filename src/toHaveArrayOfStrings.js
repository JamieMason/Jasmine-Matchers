const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeArrayOfStrings = require('./toBeArrayOfStrings');

module.exports = memberMatcherFor(toBeArrayOfStrings);
