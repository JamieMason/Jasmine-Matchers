'use strict';

module.exports = is;

function is(value, type) {
    return Object.prototype.toString.call(value) === '[object ' + type + ']';
}
