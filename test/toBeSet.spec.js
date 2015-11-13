'use strict';

describe('toBeSet', function() {
    describe('when invoked', function() {
        describe('when subject IS a Set', function() {
            it('should confirm', function() {
                // TODO: is this ok? What should we do in browsers that don't
                // have Set yet?
                if (!global.Set) {
                    return;
                }
                expect(new Set()).toBeSet();
            });
        });
        describe('when subject is NOT a Set', function() {
            it('should deny', function() {
                expect(null).not.toBeSet();
                expect(123).not.toBeSet();
                expect('[object Set]').not.toBeSet();
            });
        });
    });
});
