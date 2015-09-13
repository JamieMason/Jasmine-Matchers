'use strict';

var describeToHaveX = require('./describeToHaveX');

module.exports = describeToHaveArrayX;

function describeToHaveArrayX(name, whenArray) {
    describeToHaveX(name, function() {
        describe('when member is an array', whenArray);
    });
}
