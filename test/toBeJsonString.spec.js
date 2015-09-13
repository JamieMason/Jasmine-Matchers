'use strict';

var _undefined;

describe('toBeJsonString', function() {
    describe('when invoked', function() {
        describe('when subject IS a string of parseable JSON', function() {
            it('should confirm', function() {
                expect('{}').toBeJsonString();
                expect('[]').toBeJsonString();
                expect('[1]').toBeJsonString();
            });
        });
        describe('when subject is NOT a string of parseable JSON', function() {
            it('should deny', function() {
                expect('[1,]').not.toBeJsonString();
                expect('<>').not.toBeJsonString();
                expect(null).not.toBeJsonString();
                expect('').not.toBeJsonString();
                expect(_undefined).not.toBeJsonString();
            });
        });
    });
});
