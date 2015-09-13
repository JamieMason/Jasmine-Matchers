'use strict';

var describeToHaveX = require('./lib/describeToHaveX');
var _undefined;

describe('toHaveStringShorterThan', function() {
    describeToHaveX('toHaveStringShorterThan', function() {
        describe('when the subject and comparison ARE both strings', function() {
            describe('when the subject IS shorter than the comparision string', function() {
                it('should confirm', function() {
                    expect({
                        memberName: 'ab'
                    }).toHaveStringShorterThan('memberName', 'abc');
                    expect({
                        memberName: ''
                    }).toHaveStringShorterThan('memberName', 'a');
                });
            });
            describe('when the subject is NOT shorter than the comparision string', function() {
                it('should deny', function() {
                    expect({
                        memberName: 'abc'
                    }).not.toHaveStringShorterThan('memberName', 'ab');
                    expect({
                        memberName: 'a'
                    }).not.toHaveStringShorterThan('memberName', '');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function() {
            it('should deny (we are asserting the relative lengths of two strings)', function() {
                expect({
                    memberName: 'truthy'
                }).not.toHaveStringShorterThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringShorterThan('memberName', 'truthy');
                expect({
                    memberName: ''
                }).not.toHaveStringShorterThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringShorterThan('memberName', '');
            });
        });
    });
});
