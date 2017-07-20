const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeNumber = require('./toBeNumber');

module.exports = memberMatcherFor(toBeNumber);
