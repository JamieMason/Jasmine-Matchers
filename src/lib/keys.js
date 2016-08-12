// modules
var reduce = require('./reduce');

// public
module.exports = function keys(object) {
  return reduce(object, function (keys, value, key) {
    return keys.concat(key);
  }, []);
};
