'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveDate', function() {
    var mockDate;
    beforeEach(function() {
        mockDate = {
            any: new Date(),
            early: new Date('2013-01-01T00:00:00.000Z'),
            late: new Date('2013-01-01T01:00:00.000Z')
        };
    });
    describeToHaveX('toHaveDate', function() {
        describe('when member is an instance of Date', function() {
            it('should confirm', function() {
                expect({
                    memberName: mockDate.any
                }).toHaveDate('memberName');
            });
        });
        describe('when member is NOT an instance of Date', function() {
            it('should deny', function() {
                expect({
                    memberName: null
                }).not.toHaveDate('memberName');
            });
        });
    });
});
