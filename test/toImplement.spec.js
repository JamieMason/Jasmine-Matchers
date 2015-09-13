'use strict';

describe('toImplement', function() {
    describe('when invoked', function() {
        describe('when subject IS an Object containing all of the supplied members', function() {
            it('should confirm', function() {
                expect({
                    a: 1,
                    b: 2
                }).toImplement({
                    a: 1,
                    b: 2
                });
                expect({
                    a: 1,
                    b: 2
                }).toImplement({
                    a: 1
                });
            });
        });
        describe('when subject is NOT an Object containing all of the supplied members', function() {
            it('should deny', function() {
                expect({
                    a: 1
                }).not.toImplement({
                    c: 3
                });
                expect(null).not.toImplement({
                    a: 1
                });
            });
        });
    });
});
