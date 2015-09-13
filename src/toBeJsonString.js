'use strict';

module.exports = toBeJsonString;

function toBeJsonString(actual) {
    var isParseable;
    var json;
    try {
        json = JSON.parse(actual);
    } catch (e) {
        isParseable = false;
    }
    return isParseable !== false &&
        json !== null;
}
