'use strict';

module.exports = toThrowAnyError;

function toThrowAnyError(actual) {
    var threwError = false;
    try {
        actual();
    } catch (e) {
        threwError = true;
    }
    return threwError;
}
