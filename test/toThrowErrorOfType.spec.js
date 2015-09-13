'use strict';

/*eslint no-undef:0*/

describe('toThrowErrorOfType', function() {
    describe('when supplied a function', function() {
        describe('when function errors when invoked', function() {
            beforeEach(function() {
                this.throwError = function() {
                    throw new Error('wut?');
                };
                this.badReference = function() {
                    return badReference.someValue;
                };
            });
            describe('when the error is of the expected type', function() {
                it('should confirm', function() {
                    expect(this.throwError).toThrowErrorOfType('Error');
                    expect(this.badReference).toThrowErrorOfType('ReferenceError');
                });
            });
            describe('when the error is NOT of the expected type', function() {
                it('should confirm', function() {
                    expect(this.throwError).not.toThrowErrorOfType('ReferenceError');
                    expect(this.badReference).not.toThrowErrorOfType('Error');
                });
            });
        });
    });
});
