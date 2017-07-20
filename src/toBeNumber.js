const is = require('./lib/is');

module.exports = actual => !isNaN(parseFloat(actual)) && !is.String(actual);
