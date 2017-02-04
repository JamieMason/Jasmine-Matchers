// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeDate = require('./toBeDate');

// public
module.exports = memberMatcherFor(toBeDate);
