// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeArray = require('./toBeArray');

// public
module.exports = memberMatcherFor(toBeArray);
