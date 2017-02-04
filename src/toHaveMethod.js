// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeFunction = require('./toBeFunction');

// public
module.exports = memberMatcherFor(toBeFunction);
