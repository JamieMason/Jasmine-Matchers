'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveWholeNumber', function() {
    describeToHaveX('toHaveWholeNumber', function() {
        describe('when subject IS a number with no positive decimal places', function() {
            it('should confirm', function() {
                expect({
                    memberName: 1
                }).toHaveWholeNumber('memberName');
                expect({
                    memberName: 0
                }).toHaveWholeNumber('memberName');
                expect({
                    memberName: 0.0
                }).toHaveWholeNumber('memberName');
            });
        });
        describe('when subject is NOT a number with no positive decimal places', function() {
            it('should deny', function() {
                expect({
                    memberName: NaN
                }).not.toHaveWholeNumber('memberName');
                expect({
                    memberName: 1.1
                }).not.toHaveWholeNumber('memberName');
                expect({
                    memberName: 0.1
                }).not.toHaveWholeNumber('memberName');
            });
        });
    });
});
