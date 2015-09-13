'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNumber', function() {
    describeToHaveX('toHaveNumber', function() {
        describe('when subject IS a number', function() {
            it('should confirm', function() {
                expect({
                    memberName: 1
                }).toHaveNumber('memberName');
                expect({
                    memberName: 1.11
                }).toHaveNumber('memberName');
                expect({
                    memberName: 1e3
                }).toHaveNumber('memberName');
                expect({
                    memberName: 0.11
                }).toHaveNumber('memberName');
                expect({
                    memberName: -11
                }).toHaveNumber('memberName');
            });
        });
        describe('when subject is NOT a number', function() {
            it('should deny', function() {
                expect({
                    memberName: '1'
                }).not.toHaveNumber('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveNumber('memberName');
            });
        });
    });
});
