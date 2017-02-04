// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeIso8601 = require('./toBeIso8601');

// public
module.exports = memberMatcherFor(toBeIso8601);
