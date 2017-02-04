// modules
const memberMatcherFor = require('./lib/memberMatcherFor');
const toBeHtmlString = require('./toBeHtmlString');

// public
module.exports = memberMatcherFor(toBeHtmlString);
