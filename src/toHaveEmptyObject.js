const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeEmptyObject = require('./toBeEmptyObject');

module.exports = memberMatcherFor(toBeEmptyObject);
