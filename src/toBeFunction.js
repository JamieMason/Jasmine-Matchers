'use strict';

module.exports = toBeFunction;

function toBeFunction(actual) {
    return typeof actual === 'function';
}
