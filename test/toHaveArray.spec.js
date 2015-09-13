'use strict';

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArray', function() {
    describeToHaveArrayX('toHaveArray', function() {
        it('should confirm', function() {
            expect({
                memberName: []
            }).toHaveArray('memberName');
            expect({
                memberName: [1, 2, 3]
            }).toHaveArray('memberName');
        });
    });
});
