'use strict';

/*eslint no-new-wrappers:0*/

describe('toBeTrue', function() {
    describe('when invoked', function() {
        describe('when subject is not only truthy, but a boolean true', function() {
            it('should confirm', function() {
                expect(true).toBeTrue();
                expect(new Boolean(true)).toBeTrue();
            });
        });
        describe('when subject is truthy', function() {
            it('should deny', function() {
                expect(1).not.toBeTrue();
            });
        });
    });
});
