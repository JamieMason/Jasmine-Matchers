// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeOddNumber = require('./toBeOddNumber');

// public
module.exports = memberMatcherFor(toBeOddNumber);
