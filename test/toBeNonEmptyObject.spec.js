'use strict';

describe('toBeNonEmptyObject', function() {
    beforeEach(function() {
        this.Foo = function() {};
    });
    describe('when invoked', function() {
        describe('when subject IS an Object with at least one instance member', function() {
            it('should confirm', function() {
                expect({
                    a: 1
                }).toBeNonEmptyObject();
            });
        });
        describe('when subject is NOT an Object with at least one instance member', function() {
            beforeEach(function() {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should deny', function() {
                expect(new this.Foo()).not.toBeNonEmptyObject();
                expect({}).not.toBeNonEmptyObject();
                expect(null).not.toBeNonEmptyObject();
            });
        });
    });
});
