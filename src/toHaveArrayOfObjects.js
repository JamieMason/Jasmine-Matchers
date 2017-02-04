// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeArrayOfObjects = require('./toBeArrayOfObjects');

// public
module.exports = memberMatcherFor(toBeArrayOfObjects);
