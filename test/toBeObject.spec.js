'use strict';

/*eslint no-new-object:0*/

describe('toBeObject', function() {
    beforeEach(function() {
        this.Foo = function() {};
    });
    describe('when invoked', function() {
        describe('when subject IS an Object', function() {
            it('should confirm', function() {
                expect(new Object()).toBeObject();
                expect(new this.Foo()).toBeObject();
                expect({}).toBeObject();
            });
        });
        describe('when subject is NOT an Object', function() {
            it('should deny', function() {
                expect(null).not.toBeObject();
                expect(123).not.toBeObject();
                expect('[object Object]').not.toBeObject();
            });
        });
    });
});
