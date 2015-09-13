'use strict';

module.exports = getArrayLikeObject;

function getArrayLikeObject() {
    return {
        0: 1,
        1: 2,
        2: 3,
        length: 3
    };
}
