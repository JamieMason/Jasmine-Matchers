// modules
var toBeObject = require('./toBeObject');
var toHaveMember = require('./toHaveMember');

// public
module.exports = function toHaveUndefined(key, actual) {
  return toBeObject(actual) && toHaveMember(key, actual) && typeof actual[key] === 'undefined';
};
