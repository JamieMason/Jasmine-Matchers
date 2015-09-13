'use strict';

describe('toBeNumber', function() {
    describe('when invoked', function() {
        describe('when subject IS a number', function() {
            it('should confirm', function() {
                expect(1).toBeNumber();
                expect(1.11).toBeNumber();
                expect(1e3).toBeNumber();
                expect(0.11).toBeNumber();
                expect(-11).toBeNumber();
            });
        });
        describe('when subject is NOT a number', function() {
            it('should deny', function() {
                expect('1').not.toBeNumber();
                expect(NaN).not.toBeNumber();
            });
        });
    });
});
