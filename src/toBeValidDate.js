// modules
const is = require('./lib/is');

// public
module.exports = actual => is.Date(actual) && !isNaN(actual.getTime());
