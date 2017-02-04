// modules
const is = require('./lib/is');

// public
module.exports = actual => actual === false || (is.Boolean(actual) && actual.valueOf() === false);
