'use strict';

var is = require('./lib/is');
var toBeObject = require('./toBeObject');

module.exports = toImplement;

function toImplement(api, actual) {
    return toBeObject(api) &&
        toBeObject(actual) &&
        featuresAll(api, actual);
}

function featuresAll(api, actual) {
    for (var key in api) {
        if (api.hasOwnProperty(key) && !is(actual[key], api[key].name)) {
            return false;
        }
    }
    return true;
}
