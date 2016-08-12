// modules
var is = require('./lib/is');

// public
module.exports = function toBeObject(actual) {
  return is(actual, 'Object');
};
