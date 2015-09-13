'use strict';

/*eslint no-new-wrappers:0*/

describe('toBeBoolean', function() {
    describe('when invoked', function() {
        describe('when subject not only truthy or falsy, but a boolean', function() {
            it('should confirm', function() {
                expect(true).toBeBoolean();
                expect(false).toBeBoolean();
                expect(new Boolean(true)).toBeBoolean();
                expect(new Boolean(false)).toBeBoolean();
            });
        });
        describe('when subject is truthy or falsy', function() {
            it('should deny', function() {
                expect(1).not.toBeBoolean();
                expect(0).not.toBeBoolean();
            });
        });
    });
});
