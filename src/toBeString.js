// modules
var is = require('./lib/is');

// public
module.exports = function toBeString(actual) {
  return is(actual, 'String');
};
