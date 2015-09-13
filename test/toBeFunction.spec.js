'use strict';

describe('toBeFunction', function() {
    describe('when invoked', function() {
        describe('when subject IS a function', function() {
            it('should confirm', function() {
                expect(function() {}).toBeFunction();
            });
        });
        describe('when subject is NOT a function', function() {
            it('should deny', function() {
                expect(/regexp/).not.toBeFunction();
            });
        });
    });
});
