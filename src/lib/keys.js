// modules
const reduce = require('./reduce');

// public
module.exports = object => reduce(object, (keys, value, key) => keys.concat(key), []);
