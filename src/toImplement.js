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
        if (!actual[key] || actual[key].constructor !== api[key]) {
            return false;
        }
    }
    return true;
}
