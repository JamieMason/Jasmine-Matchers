// modules
const is = require('./lib/is');

// public
module.exports = actual => is.Array(actual) && actual.length > 0;
