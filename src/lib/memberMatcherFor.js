// modules
const is = require('./is');

// public
module.exports = toBeX => (key, actual) => is.Object(actual) && toBeX(actual[key]);
