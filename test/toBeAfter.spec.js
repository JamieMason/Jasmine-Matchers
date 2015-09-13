'use strict';

describe('toBeAfter', function() {
    describe('when invoked', function() {
        describe('when value is a Date', function() {
            describe('when date occurs after another', function() {
                it('should confirm', function() {
                    expect(new Date('2013-01-01T01:00:00.000Z')).toBeAfter(new Date('2013-01-01T00:00:00.000Z'));
                });
            });
            describe('when date does NOT occur after another', function() {
                it('should deny', function() {
                    expect(new Date('2013-01-01T00:00:00.000Z')).not.toBeAfter(new Date('2013-01-01T01:00:00.000Z'));
                });
            });
        });
    });
});
