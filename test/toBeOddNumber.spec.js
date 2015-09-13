'use strict';

describe('toBeOddNumber', function() {
    describe('when invoked', function() {
        describe('when subject IS an odd number', function() {
            it('should confirm', function() {
                expect(1).toBeOddNumber();
            });
        });
        describe('when subject is NOT an odd number', function() {
            it('should deny', function() {
                expect(2).not.toBeOddNumber();
                expect(NaN).not.toBeOddNumber();
            });
        });
    });
});
