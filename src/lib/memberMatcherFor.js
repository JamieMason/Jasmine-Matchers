const is = require('./is');

module.exports = toBeX => (key, actual) => is.Object(actual) && toBeX(actual[key]);
