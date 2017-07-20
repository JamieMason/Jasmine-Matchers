const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeIso8601 = require('./toBeIso8601');

module.exports = memberMatcherFor(toBeIso8601);
