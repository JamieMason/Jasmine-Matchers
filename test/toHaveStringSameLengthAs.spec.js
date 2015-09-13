'use strict';

var describeToHaveX = require('./lib/describeToHaveX');
var _undefined;

describe('toHaveStringSameLengthAs', function() {
    describeToHaveX('toHaveStringSameLengthAs', function() {
        describe('when the subject and comparison ARE both strings', function() {
            describe('when the subject IS the same length as the comparision string', function() {
                it('should confirm', function() {
                    expect({
                        memberName: 'ab'
                    }).toHaveStringSameLengthAs('memberName', 'ab');
                });
            });
            describe('when the subject is NOT the same length as the comparision string', function() {
                it('should deny', function() {
                    expect({
                        memberName: 'abc'
                    }).not.toHaveStringSameLengthAs('memberName', 'ab');
                    expect({
                        memberName: 'a'
                    }).not.toHaveStringSameLengthAs('memberName', '');
                    expect({
                        memberName: ''
                    }).not.toHaveStringSameLengthAs('memberName', 'a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function() {
            it('should deny (we are asserting the relative lengths of two strings)', function() {
                expect({
                    memberName: 'truthy'
                }).not.toHaveStringSameLengthAs('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringSameLengthAs('memberName', 'truthy');
                expect({
                    memberName: ''
                }).not.toHaveStringSameLengthAs('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringSameLengthAs('memberName', '');
            });
        });
    });
});
