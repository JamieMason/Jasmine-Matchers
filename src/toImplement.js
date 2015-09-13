'use strict';

var toBeObject = require('./toBeObject');

module.exports = toImplement;

function toImplement(api, actual) {
    return toBeObject(api) &&
        toBeObject(actual) &&
        featuresAll(api, actual);
}

function featuresAll(api, actual) {
    for (var key in api) {
        if (api.hasOwnProperty(key) &&
            key in actual === false) {
            return false;
        }
    }
    return true;
}
