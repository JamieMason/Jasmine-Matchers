// modules
const is = require('./lib/is');

// public
module.exports = actual => actual === true || (is.Boolean(actual) && actual.valueOf() === true);
