// modules
var is = require('./lib/is');

// public
module.exports = function toBeArray(actual) {
  return is(actual, 'Array');
};
