// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeWholeNumber = require('./toBeWholeNumber');

// public
module.exports = memberMatcherFor(toBeWholeNumber);
