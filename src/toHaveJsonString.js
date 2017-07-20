const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeJsonString = require('./toBeJsonString');

module.exports = memberMatcherFor(toBeJsonString);
