// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeObject = require('./toBeObject');

// public
module.exports = memberMatcherFor(toBeObject);
