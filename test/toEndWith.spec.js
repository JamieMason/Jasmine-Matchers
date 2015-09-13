'use strict';

var _undefined;

describe('toEndWith', function() {
    describe('when invoked', function() {
        describe('when subject is NOT an undefined or empty string', function() {
            describe('when subject is a string whose trailing characters match the expected string', function() {
                it('should confirm', function() {
                    expect('jamie').toEndWith('mie');
                });
            });
            describe('when subject is a string whose trailing characters DO NOT match the expected string', function() {
                it('should deny', function() {
                    expect('jamie ').not.toEndWith('mie');
                    expect('jamiE').not.toEndWith('mie');
                });
            });
        });
        describe('when subject IS an undefined or empty string', function() {
            it('should deny', function() {
                expect('').not.toEndWith('');
                expect(_undefined).not.toEndWith('');
                expect(_undefined).not.toEndWith('undefined');
                expect('undefined').not.toEndWith(_undefined);
            });
        });
    });
});
