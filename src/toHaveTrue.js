const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeTrue = require('./toBeTrue');

module.exports = memberMatcherFor(toBeTrue);
