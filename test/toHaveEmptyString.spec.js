'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveEmptyString', function() {
    describeToHaveX('toHaveEmptyString', function() {
        describe('when subject IS a string with no characters', function() {
            it('should confirm', function() {
                expect({
                    memberName: ''
                }).toHaveEmptyString('memberName');
            });
        });
        describe('when subject is NOT a string with no characters', function() {
            it('should deny', function() {
                expect({
                    memberName: ' '
                }).not.toHaveEmptyString('memberName');
            });
        });
    });
});
