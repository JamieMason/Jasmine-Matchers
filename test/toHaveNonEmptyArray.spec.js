'use strict';

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveNonEmptyArray', function() {
    describeToHaveArrayX('toHaveNonEmptyArray', function() {
        describe('when named array has no members', function() {
            it('should deny', function() {
                expect({
                    memberName: []
                }).not.toHaveNonEmptyArray('memberName');
            });
        });
        describe('when named array has members', function() {
            it('should confirm', function() {
                expect({
                    memberName: [1, 2, 3]
                }).toHaveNonEmptyArray('memberName');
            });
        });
    });
});
