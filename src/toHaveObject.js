const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeObject = require('./toBeObject');

module.exports = memberMatcherFor(toBeObject);
