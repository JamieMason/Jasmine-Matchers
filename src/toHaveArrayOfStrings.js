// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeArrayOfStrings = require('./toBeArrayOfStrings');

// public
module.exports = memberMatcherFor(toBeArrayOfStrings);
