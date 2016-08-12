// modules
var is = require('./lib/is');

// public
module.exports = function toBeFalse(actual) {
  return actual === false || (is(actual, 'Boolean') && actual.valueOf() === false);
};
