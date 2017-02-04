// modules
const is = require('./lib/is');

// public
module.exports = actual => actual === true || is.True(actual); // eslint-disable-line new-cap
