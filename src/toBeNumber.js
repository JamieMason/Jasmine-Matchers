// modules
const is = require('./lib/is');

// public
module.exports = actual => !isNaN(parseFloat(actual)) && !is.String(actual);
