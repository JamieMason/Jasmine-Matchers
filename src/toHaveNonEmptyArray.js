const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNonEmptyArray = require('./toBeNonEmptyArray');

module.exports = memberMatcherFor(toBeNonEmptyArray);
