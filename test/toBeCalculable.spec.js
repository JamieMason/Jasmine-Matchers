'use strict';

describe('toBeCalculable', function() {
    describe('when invoked', function() {
        describe('when subject CAN be coerced to be used in mathematical operations', function() {
            it('should confirm', function() {
                expect('1').toBeCalculable();
                expect('').toBeCalculable();
                expect(null).toBeCalculable();
            });
        });
        describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function() {
            it('should deny', function() {
                expect({}).not.toBeCalculable();
                expect(NaN).not.toBeCalculable();
            });
        });
    });
});
