'use strict';

var describeWhenNotArray = require('./lib/describeWhenNotArray');

describe('toBeEmptyArray', function() {
    describe('when invoked', function() {
        describe('when subject is a true Array', function() {
            describe('when subject has members', function() {
                it('should confirm', function() {
                    expect([]).toBeEmptyArray();
                });
            });
            describe('when subject has no members', function() {
                it('should deny', function() {
                    expect([null]).not.toBeEmptyArray();
                    expect(['']).not.toBeEmptyArray();
                    expect([1]).not.toBeEmptyArray();
                    expect([true]).not.toBeEmptyArray();
                    expect([false]).not.toBeEmptyArray();
                });
            });
        });
        describeWhenNotArray('toBeEmptyArray');
    });
});
