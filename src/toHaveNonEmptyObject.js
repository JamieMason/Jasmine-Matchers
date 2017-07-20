const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNonEmptyObject = require('./toBeNonEmptyObject');

module.exports = memberMatcherFor(toBeNonEmptyObject);
