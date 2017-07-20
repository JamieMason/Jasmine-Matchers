const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeString = require('./toBeString');

module.exports = memberMatcherFor(toBeString);
