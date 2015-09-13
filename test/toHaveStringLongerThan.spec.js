'use strict';

var describeToHaveX = require('./lib/describeToHaveX');
var _undefined;

describe('toHaveStringLongerThan', function() {
    describeToHaveX('toHaveStringLongerThan', function() {
        describe('when the subject and comparison ARE both strings', function() {
            describe('when the subject IS longer than the comparision string', function() {
                it('should confirm', function() {
                    expect({
                        memberName: 'abc'
                    }).toHaveStringLongerThan('memberName', 'ab');
                    expect({
                        memberName: 'a'
                    }).toHaveStringLongerThan('memberName', '');
                });
            });
            describe('when the subject is NOT longer than the comparision string', function() {
                it('should deny', function() {
                    expect({
                        memberName: 'ab'
                    }).not.toHaveStringLongerThan('memberName', 'abc');
                    expect({
                        memberName: ''
                    }).not.toHaveStringLongerThan('memberName', 'a');
                });
            });
        });
        describe('when the subject and comparison are NOT both strings', function() {
            it('should deny (we are asserting the relative lengths of two strings)', function() {
                expect({
                    memberName: 'truthy'
                }).not.toHaveStringLongerThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringLongerThan('memberName', 'truthy');
                expect({
                    memberName: ''
                }).not.toHaveStringLongerThan('memberName', _undefined);
                expect({
                    memberName: _undefined
                }).not.toHaveStringLongerThan('memberName', '');
            });
        });
    });
});
