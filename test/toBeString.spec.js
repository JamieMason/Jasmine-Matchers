'use strict';

describe('toBeString', function() {
    describe('when invoked', function() {
        describe('when subject IS a string of any length', function() {
            it('should confirm', function() {
                expect('').toBeString();
                expect(' ').toBeString();
            });
        });
        describe('when subject is NOT a string of any length', function() {
            it('should deny', function() {
                expect(null).not.toBeString();
            });
        });
    });
});
