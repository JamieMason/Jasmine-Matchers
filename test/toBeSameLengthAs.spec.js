'use strict';

var _undefined;

describe('toBeSameLengthAs', function() {
    describe('when invoked', function() {
        describe('when the subject and comparison ARE both strings', function() {
            describe('when the subject IS the same length as the comparision string', function() {
                it('should confirm', function() {
                    expect('ab').toBeSameLengthAs('ab');
                });
            });
            describe('when the subject is NOT the same length as the comparision string', function() {
                it('should deny', function() {
                    expect('abc').not.toBeSameLengthAs('ab');
                    expect('a').not.toBeSameLengthAs('');
                    expect('').not.toBeSameLengthAs('a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function() {
            it('should deny (we are asserting the relative lengths of two strings)', function() {
                expect('truthy').not.toBeSameLengthAs(_undefined);
                expect(_undefined).not.toBeSameLengthAs('truthy');
                expect('').not.toBeSameLengthAs(_undefined);
                expect(_undefined).not.toBeSameLengthAs('');
            });
        });
    });
});
