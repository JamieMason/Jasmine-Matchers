const is = require('./lib/is');

module.exports = actual => actual === false || is.False(actual); // eslint-disable-line new-cap
