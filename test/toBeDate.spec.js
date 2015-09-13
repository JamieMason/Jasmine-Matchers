'use strict';

describe('toBeDate', function() {
    describe('when invoked', function() {
        describe('when value is an instance of Date', function() {
            it('should confirm', function() {
                expect(new Date()).toBeDate();
            });
        });
        describe('when value is NOT an instance of Date', function() {
            it('should deny', function() {
                expect(null).not.toBeDate();
            });
        });
    });
});
