'use strict';

var toBeObject = require('./toBeObject');
var toHaveMember = require('./toHaveMember');

module.exports = toImplement;

function toImplement(api, actual) {
    return toBeObject(api) &&
        toBeObject(actual) &&
        featuresAll(api, actual);
}

function featuresAll(api, actual) {
    for (var key in api) {
        if (!toHaveMember(key, actual) || actual[key].constructor !== api[key]) {
            return false;
        }
    }
    return true;
}
