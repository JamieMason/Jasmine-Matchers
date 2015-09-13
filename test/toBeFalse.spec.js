'use strict';

/*eslint no-new-wrappers:0*/

describe('toBeFalse', function() {
    describe('when invoked', function() {
        describe('when subject is not only falsy, but a boolean false', function() {
            it('should confirm', function() {
                expect(false).toBeFalse();
                expect(new Boolean(false)).toBeFalse();
            });
        });
        describe('when subject is falsy', function() {
            it('should deny', function() {
                expect(1).not.toBeFalse();
            });
        });
    });
});
