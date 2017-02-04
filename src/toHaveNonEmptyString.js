// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = memberMatcherFor(toBeNonEmptyString);
