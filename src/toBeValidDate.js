const is = require('./lib/is');

module.exports = actual => is.Date(actual) && !isNaN(actual.getTime());
