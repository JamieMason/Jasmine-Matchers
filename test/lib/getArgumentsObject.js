'use strict';

module.exports = getArgumentsObject;

function getArgumentsObject() {
    return (function() {
        return arguments;
    }(1, 2, 3));
}
