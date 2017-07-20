const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeEmptyString = require('./toBeEmptyString');

module.exports = memberMatcherFor(toBeEmptyString);
