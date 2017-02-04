// modules
const is = require('./lib/is');
const keys = require('./lib/keys');

// public
module.exports = actual => is.Object(actual) && keys(actual).length === 0;
