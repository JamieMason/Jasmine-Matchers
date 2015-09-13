'use strict';

module.exports = describeToHaveX;

function describeToHaveX(name, whenPresent) {
    describe('when invoked', function() {
        describe('when subject is not an object', function() {
            it('should deny', function() {
                expect(0).not[name]('memberName');
                expect(null).not[name]('memberName');
                expect(true).not[name]('memberName');
                expect(false).not[name]('memberName');
                expect('').not[name]('memberName');
            });
        });
        describe('when subject is an object', function() {
            describe('when member is not present', function() {
                it('should deny', function() {
                    expect({}).not[name]('memberName');
                });
            });
            describe('when member is present', function() {
                whenPresent();
            });
        });
    });
}
