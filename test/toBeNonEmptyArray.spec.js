'use strict';

var describeWhenNotArray = require('./lib/describeWhenNotArray');
var _undefined;

describe('toBeNonEmptyArray', function() {
    describe('when invoked', function() {
        describe('when subject is a true Array', function() {
            describe('when subject has members', function() {
                it('should confirm', function() {
                    expect([null]).toBeNonEmptyArray();
                    expect([_undefined]).toBeNonEmptyArray();
                    expect(['']).toBeNonEmptyArray();
                });
            });
            describe('when subject has no members', function() {
                it('should deny', function() {
                    expect([]).not.toBeNonEmptyArray();
                });
            });
        });
        describeWhenNotArray('toBeNonEmptyArray');
    });
});
