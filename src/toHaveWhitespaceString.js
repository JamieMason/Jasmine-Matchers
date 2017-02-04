// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeWhitespace = require('./toBeWhitespace');

// public
module.exports = memberMatcherFor(toBeWhitespace);
