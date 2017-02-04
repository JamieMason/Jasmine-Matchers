// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNonEmptyObject = require('./toBeNonEmptyObject');

// public
module.exports = memberMatcherFor(toBeNonEmptyObject);
