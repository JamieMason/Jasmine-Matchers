'use strict';

describe('toImplement', function() {
    describe('when invoked', function() {
        describe('when subject IS an Object containing all of the supplied members', function() {
            describe('when the data types match', function() {
                it('should confirm', function() {
                    expect({
                        a: 1,
                        b: 2
                    }).toImplement({
                        a: Number,
                        b: Number
                    });
                    expect({
                        a: 1,
                        b: 2
                    }).toImplement({
                        a: Number
                    });
                });
            });
            describe('when the data types differ', function() {
                it('should deny', function() {
                    expect({
                        a: 1,
                        b: 2
                    }).not.toImplement({
                        a: String,
                        b: Object
                    });
                    expect({
                        a: 1,
                        b: 2
                    }).not.toImplement({
                        a: Function
                    });
                });
            });
        });
        describe('when subject is NOT an Object containing all of the supplied members', function() {
            it('should deny', function() {
                expect({
                    a: 1
                }).not.toImplement({
                    c: Number
                });
                expect(null).not.toImplement({
                    a: Number
                });
            });
        });
    });
});
