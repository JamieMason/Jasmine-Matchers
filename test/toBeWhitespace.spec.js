'use strict';

describe('toBeWhitespace', function() {
    describe('when invoked', function() {
        describe('when subject IS a string containing only tabs, spaces, returns etc', function() {
            it('should confirm', function() {
                expect(' ').toBeWhitespace();
                expect('').toBeWhitespace();
            });
        });
        describe('when subject is NOT a string containing only tabs, spaces, returns etc', function() {
            it('should deny', function() {
                expect('has-no-whitespace').not.toBeWhitespace();
                expect('has whitespace').not.toBeWhitespace();
                expect(null).not.toBeWhitespace();
            });
        });
    });
});
