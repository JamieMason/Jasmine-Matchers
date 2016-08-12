// modules
var is = require('./lib/is');

// public
module.exports = function toBeNonEmptyArray(actual) {
  return is(actual, 'Array') && actual.length > 0;
};
