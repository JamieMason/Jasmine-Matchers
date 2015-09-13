'use strict';

describe('toBeNonEmptyString', function() {
    describe('when invoked', function() {
        describe('when subject IS a string with at least one character', function() {
            it('should confirm', function() {
                expect(' ').toBeNonEmptyString();
            });
        });
        describe('when subject is NOT a string with at least one character', function() {
            it('should deny', function() {
                expect('').not.toBeNonEmptyString();
                expect(null).not.toBeNonEmptyString();
            });
        });
    });
});
