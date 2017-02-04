// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeEmptyObject = require('./toBeEmptyObject');

// public
module.exports = memberMatcherFor(toBeEmptyObject);
