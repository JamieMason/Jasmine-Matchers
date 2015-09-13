'use strict';

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfSize', function() {
    describeToHaveArrayX('toHaveArrayOfSize', function() {
        describe('when number of expected items does not match', function() {
            it('should deny', function() {
                expect({
                    memberName: ''
                }).not.toHaveArrayOfSize('memberName');
                expect({
                    memberName: ['bar']
                }).not.toHaveArrayOfSize('memberName', 0);
            });
        });
        describe('when number of expected items does match', function() {
            it('should confirm', function() {
                expect({
                    memberName: []
                }).toHaveArrayOfSize('memberName', 0);
                expect({
                    memberName: ['bar']
                }).toHaveArrayOfSize('memberName', 1);
                expect({
                    memberName: ['bar', 'baz']
                }).toHaveArrayOfSize('memberName', 2);
            });
        });
    });
});
