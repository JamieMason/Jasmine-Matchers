const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = memberMatcherFor(toBeNonEmptyString);
