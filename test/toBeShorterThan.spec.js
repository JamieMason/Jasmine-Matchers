'use strict';

var _undefined;

describe('toBeShorterThan', function() {
    describe('when invoked', function() {
        describe('when the subject and comparison ARE both strings', function() {
            describe('when the subject IS shorter than the comparision string', function() {
                it('should confirm', function() {
                    expect('ab').toBeShorterThan('abc');
                    expect('').toBeShorterThan('a');
                });
            });
            describe('when the subject is NOT shorter than the comparision string', function() {
                it('should deny', function() {
                    expect('abc').not.toBeShorterThan('ab');
                    expect('a').not.toBeShorterThan('');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function() {
            it('should deny (we are asserting the relative lengths of two strings)', function() {
                expect('truthy').not.toBeShorterThan(_undefined);
                expect(_undefined).not.toBeShorterThan('truthy');
                expect('').not.toBeShorterThan(_undefined);
                expect(_undefined).not.toBeShorterThan('');
            });
        });
    });
});
