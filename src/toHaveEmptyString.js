// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeEmptyString = require('./toBeEmptyString');

// public
module.exports = memberMatcherFor(toBeEmptyString);
