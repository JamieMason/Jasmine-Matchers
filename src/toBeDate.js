// modules
var is = require('./lib/is');

// public
module.exports = function toBeDate(actual) {
  return is(actual, 'Date');
};
