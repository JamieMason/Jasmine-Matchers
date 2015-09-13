'use strict';

describe('toBeWithinRange', function() {
    describe('when invoked', function() {
        describe('when subject IS a number >= floor and <= ceiling', function() {
            it('should confirm', function() {
                expect(0).toBeWithinRange(0, 2);
                expect(1).toBeWithinRange(0, 2);
                expect(2).toBeWithinRange(0, 2);
            });
        });
        describe('when subject is NOT a number >= floor and <= ceiling', function() {
            it('should deny', function() {
                expect(-3).not.toBeWithinRange(0, 2);
                expect(-2).not.toBeWithinRange(0, 2);
                expect(-1).not.toBeWithinRange(0, 2);
                expect(3).not.toBeWithinRange(0, 2);
                expect(NaN).not.toBeWithinRange(0, 2);
            });
        });
    });
});
