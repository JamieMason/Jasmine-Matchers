'use strict';

describe('toBeEvenNumber', function() {
    describe('when invoked', function() {
        describe('when subject IS an even number', function() {
            it('should confirm', function() {
                expect(2).toBeEvenNumber();
            });
        });
        describe('when subject is NOT an even number', function() {
            it('should deny', function() {
                expect(1).not.toBeEvenNumber();
                expect(NaN).not.toBeEvenNumber();
            });
        });
    });
});
