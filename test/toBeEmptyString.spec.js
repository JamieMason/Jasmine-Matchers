'use strict';

describe('toBeEmptyString', function() {
    describe('when invoked', function() {
        describe('when subject IS a string with no characters', function() {
            it('should confirm', function() {
                expect('').toBeEmptyString();
            });
        });
        describe('when subject is NOT a string with no characters', function() {
            it('should deny', function() {
                expect(' ').not.toBeEmptyString();
            });
        });
    });
});
