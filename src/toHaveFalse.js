// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeFalse = require('./toBeFalse');

// public
module.exports = memberMatcherFor(toBeFalse);
