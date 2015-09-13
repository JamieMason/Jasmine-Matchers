'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNumberWithinRange', function() {
    describeToHaveX('toHaveNumberWithinRange', function() {
        describe('when subject IS a number >= floor and <= ceiling', function() {
            it('should confirm', function() {
                expect({
                    memberName: 0
                }).toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: 1
                }).toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: 2
                }).toHaveNumberWithinRange('memberName', 0, 2);
            });
        });
        describe('when subject is NOT a number >= floor and <= ceiling', function() {
            it('should deny', function() {
                expect({
                    memberName: -3
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: -2
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: -1
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: 3
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
                expect({
                    memberName: NaN
                }).not.toHaveNumberWithinRange('memberName', 0, 2);
            });
        });
    });
});
