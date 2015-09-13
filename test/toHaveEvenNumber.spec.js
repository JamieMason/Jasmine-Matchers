'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveEvenNumber', function() {
    describeToHaveX('toHaveEvenNumber', function() {
        describe('when subject IS an even number', function() {
            it('should confirm', function() {
                expect({
                    memberName: 2
                }).toHaveEvenNumber('memberName');
            });
        });
        describe('when subject is NOT an even number', function() {
            it('should deny', function() {
                expect({
                    memberName: 1
                }).not.toHaveEvenNumber('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveEvenNumber('memberName');
            });
        });
    });
});
