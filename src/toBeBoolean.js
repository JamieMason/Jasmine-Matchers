// modules
var is = require('./lib/is');

// public
module.exports = function toBeBoolean(actual) {
  return is(actual, 'Boolean');
};
