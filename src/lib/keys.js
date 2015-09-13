'use strict';

module.exports = keys;

function keys(object) {
    var list = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            list.push(key);
        }
    }
    return list;
}
