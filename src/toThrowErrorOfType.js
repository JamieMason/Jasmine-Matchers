'use strict';

module.exports = toThrowErrorOfType;

function toThrowErrorOfType(type, actual) {
    var threwErrorOfType = false;
    try {
        actual();
    } catch (e) {
        threwErrorOfType = (e.name === type);
    }
    return threwErrorOfType;
}
