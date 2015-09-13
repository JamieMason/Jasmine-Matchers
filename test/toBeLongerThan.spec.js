'use strict';

var _undefined;

describe('toBeLongerThan', function() {
    describe('when invoked', function() {
        describe('when the subject and comparison ARE both strings', function() {
            describe('when the subject IS longer than the comparision string', function() {
                it('should confirm', function() {
                    expect('abc').toBeLongerThan('ab');
                    expect('a').toBeLongerThan('');
                });
            });
            describe('when the subject is NOT longer than the comparision string', function() {
                it('should deny', function() {
                    expect('ab').not.toBeLongerThan('abc');
                    expect('').not.toBeLongerThan('a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function() {
            it('should deny (we are asserting the relative lengths of two strings)', function() {
                expect('truthy').not.toBeLongerThan(_undefined);
                expect(_undefined).not.toBeLongerThan('truthy');
                expect('').not.toBeLongerThan(_undefined);
                expect(_undefined).not.toBeLongerThan('');
            });
        });
    });
});
