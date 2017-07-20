const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeWhitespace = require('./toBeWhitespace');

module.exports = memberMatcherFor(toBeWhitespace);
