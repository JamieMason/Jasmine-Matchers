'use strict';

var is = require('./lib/is');

module.exports = toBeDate;

function toBeDate(actual) {
    return is(actual, 'Date');
}
