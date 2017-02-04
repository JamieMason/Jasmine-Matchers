// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeCalculable = require('./toBeCalculable');

// public
module.exports = memberMatcherFor(toBeCalculable);
