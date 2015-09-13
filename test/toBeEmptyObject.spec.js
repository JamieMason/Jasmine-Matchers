'use strict';

describe('toBeEmptyObject', function() {
    beforeEach(function() {
        this.Foo = function() {};
    });
    describe('when invoked', function() {
        describe('when subject IS an Object with no instance members', function() {
            beforeEach(function() {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should confirm', function() {
                expect(new this.Foo()).toBeEmptyObject();
                expect({}).toBeEmptyObject();
            });
        });
        describe('when subject is NOT an Object with no instance members', function() {
            it('should deny', function() {
                expect({
                    a: 1
                }).not.toBeEmptyObject();
                expect(null).not.toBeNonEmptyObject();
            });
        });
    });
});
