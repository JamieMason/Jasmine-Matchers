'use strict';

var _undefined;

describe('toStartWith', function() {
    describe('when invoked', function() {
        describe('when subject is NOT an undefined or empty string', function() {
            describe('when subject is a string whose leading characters match the expected string', function() {
                it('should confirm', function() {
                    expect('jamie').toStartWith('jam');
                });
            });
            describe('when subject is a string whose leading characters DO NOT match the expected string', function() {
                it('should deny', function() {
                    expect(' jamie').not.toStartWith('jam');
                    expect('Jamie').not.toStartWith('jam');
                });
            });
        });
        describe('when subject IS an undefined or empty string', function() {
            it('should deny', function() {
                expect('').not.toStartWith('');
                expect(_undefined).not.toStartWith('');
                expect(_undefined).not.toStartWith('undefined');
                expect('undefined').not.toStartWith(_undefined);
            });
        });
    });
});
