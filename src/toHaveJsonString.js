// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeJsonString = require('./toBeJsonString');

// public
module.exports = memberMatcherFor(toBeJsonString);
