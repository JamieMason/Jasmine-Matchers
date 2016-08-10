'use strict';

var is = require('./is');

module.exports = reduce;

function reduce(collection, fn, memo) {
    if (is(collection, 'Array')) {
        for (var i = 0, len = collection.length; i < len; i++) {
            memo = fn(memo, collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            if (collection.hasOwnProperty(key)) {
                memo = fn(memo, collection[key], key, collection);
            }
        }
    }
    return memo;
}
