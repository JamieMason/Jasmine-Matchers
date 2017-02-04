// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeBoolean = require('./toBeBoolean');

// public
module.exports = memberMatcherFor(toBeBoolean);
