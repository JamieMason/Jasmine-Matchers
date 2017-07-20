const is = require('./lib/is');

module.exports = actual => is.Array(actual) && actual.length > 0;
