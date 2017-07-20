const reduce = require('./reduce');

module.exports = object => reduce(object, (keys, value, key) => keys.concat(key), []);
