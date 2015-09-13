'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveOddNumber', function() {
    describeToHaveX('toHaveOddNumber', function() {
        describe('when subject IS an odd number', function() {
            it('should confirm', function() {
                expect({
                    memberName: 1
                }).toHaveOddNumber('memberName');
            });
        });
        describe('when subject is NOT an odd number', function() {
            it('should deny', function() {
                expect({
                    memberName: 2
                }).not.toHaveOddNumber('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveOddNumber('memberName');
            });
        });
    });
});
