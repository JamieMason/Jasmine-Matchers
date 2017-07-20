const is = require('./lib/is');

module.exports = actual => actual === true || is.True(actual); // eslint-disable-line new-cap
