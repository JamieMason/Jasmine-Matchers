'use strict';

var toBeString = require('./toBeString');

module.exports = toBeIso8601;

function toBeIso8601(actual) {

    if (!toBeString(actual)) {
        return false;
    }

    if (
        isIso8601(actual, [
            // 2013-07-08
            4, '-', 2, '-', 2
        ]) || isIso8601(actual, [
            // 2013-07-08T07:29
            4, '-', 2, '-', 2, 'T', 2, ':', 2
        ]) || isIso8601(actual, [
            // 2013-07-08T07:29:15
            4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2
        ]) || isIso8601(actual, [
            // 2013-07-08T07:29:15.863
            4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3
        ]) || isIso8601(actual, [
            // 2013-07-08T07:29:15.863Z
            4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3, 'Z'
        ])
    ) {
        return new Date(actual).toString() !== 'Invalid Date';
    }

    return false;
}

function isIso8601(string, pattern) {
    var returnValue = string.search(
        new RegExp('^' + pattern.map(escapeTerm).join('') + '$')
    ) !== -1;
    return returnValue;

    function escapeTerm(term) {
        if (term === '-') {
            return '\\-';
        } else if (typeof term === 'string') {
            return term;
        } else {
            return '([0-9]{' + term + '})';
        }
    }
}
