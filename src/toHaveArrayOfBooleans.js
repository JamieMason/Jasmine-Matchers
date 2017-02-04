// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

// public
module.exports = memberMatcherFor(toBeArrayOfBooleans);
