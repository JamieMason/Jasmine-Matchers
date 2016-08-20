// modules
var is = require('./lib/is');

// public
module.exports = function toBeFunction(actual) {
  return is(actual, 'Function');
};
