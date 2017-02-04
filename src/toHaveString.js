// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeString = require('./toBeString');

// public
module.exports = memberMatcherFor(toBeString);
