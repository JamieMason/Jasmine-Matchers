// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNonEmptyArray = require('./toBeNonEmptyArray');

// public
module.exports = memberMatcherFor(toBeNonEmptyArray);
