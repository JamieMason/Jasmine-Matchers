// modules
var is = require('./is');

// public
module.exports = function reduce(collection, fn, memo) {
  if (is(collection, 'Array')) {
    for (var i = 0, len = collection.length; i < len; i++) {
      memo = fn(memo, collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      if ({}.hasOwnProperty.call(collection, key)) {
        memo = fn(memo, collection[key], key, collection);
      }
    }
  }
  return memo;
};
