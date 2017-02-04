// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNumber = require('./toBeNumber');

// public
module.exports = memberMatcherFor(toBeNumber);
