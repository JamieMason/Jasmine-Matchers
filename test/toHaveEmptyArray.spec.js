'use strict';

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveEmptyArray', function() {
    describeToHaveArrayX('toHaveEmptyArray', function() {
        describe('when named array has members', function() {
            it('should deny', function() {
                expect({
                    memberName: [1, 2, 3]
                }).not.toHaveEmptyArray('memberName');
                expect({
                    memberName: ''
                }).not.toHaveEmptyArray('memberName');
            });
        });
        describe('when named array has no members', function() {
            it('should confirm', function() {
                expect({
                    memberName: []
                }).toHaveEmptyArray('memberName');
            });
        });
    });
});
