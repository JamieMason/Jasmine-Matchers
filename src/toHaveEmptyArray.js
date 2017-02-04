// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeEmptyArray = require('./toBeEmptyArray');

// public
module.exports = memberMatcherFor(toBeEmptyArray);
