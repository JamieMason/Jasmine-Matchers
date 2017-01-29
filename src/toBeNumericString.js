// modules
var is = require('./lib/is');

// public
module.exports = function toBeNumericString(actual) {
  return is(actual, 'String') && !/[\s\r\n\t]/g.test(actual) && (!isNaN(Number(actual)) || actual.includes(',') && actual === parseFloat(actual.replace(/,/g, '')).toLocaleString('en-US', { minimumFractionDigits:  actual.lastIndexOf('.') !== -1 ? (actual.length - 1 -  actual.lastIndexOf('.')) : 0 }));
};
