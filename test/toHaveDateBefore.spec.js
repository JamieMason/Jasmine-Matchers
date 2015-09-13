'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describeToHaveX('toHaveDateBefore', function() {
    var mockDate;
    beforeEach(function() {
        mockDate = {
            any: new Date(),
            early: new Date('2013-01-01T00:00:00.000Z'),
            late: new Date('2013-01-01T01:00:00.000Z')
        };
    });
    describe('when member is an instance of Date', function() {
        describe('when date occurs before another', function() {
            it('should confirm', function() {
                expect({
                    memberName: mockDate.early
                }).toHaveDateBefore('memberName', mockDate.late);
            });
        });
        describe('when date does NOT occur before another', function() {
            it('should deny', function() {
                expect({
                    memberName: mockDate.late
                }).not.toHaveDateBefore('memberName', mockDate.early);
            });
        });
    });
    describe('when member is NOT an instance of Date', function() {
        it('should deny', function() {
            expect({
                memberName: null
            }).not.toHaveDateBefore('memberName', mockDate.any);
        });
    });
});
