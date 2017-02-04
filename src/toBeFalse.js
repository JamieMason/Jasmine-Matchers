// modules
const is = require('./lib/is');

// public
module.exports = actual => actual === false || is.False(actual); // eslint-disable-line new-cap
