// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

// public
module.exports = memberMatcherFor(toBeArrayOfNumbers);
