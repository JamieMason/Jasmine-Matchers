'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNonEmptyString', function() {
    describeToHaveX('toHaveNonEmptyString', function() {
        describe('when subject IS a string with at least one character', function() {
            it('should confirm', function() {
                expect({
                    memberName: ' '
                }).toHaveNonEmptyString('memberName');
            });
        });
        describe('when subject is NOT a string with at least one character', function() {
            it('should deny', function() {
                expect({
                    memberName: ''
                }).not.toHaveNonEmptyString('memberName');
                expect({
                    memberName: null
                }).not.toHaveNonEmptyString('memberName');
            });
        });
    });
});
