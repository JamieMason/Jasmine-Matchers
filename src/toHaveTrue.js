// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeTrue = require('./toBeTrue');

// public
module.exports = memberMatcherFor(toBeTrue);
