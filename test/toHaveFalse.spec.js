'use strict';

/*eslint no-new-wrappers:0*/

var describeToHaveBooleanX = require('./lib/describeToHaveBooleanX');

describe('toHaveFalse', function() {
    describeToHaveBooleanX('toHaveFalse', function() {
        describe('when primitive', function() {
            describe('when true', function() {
                it('should deny', function() {
                    expect({
                        memberName: true
                    }).not.toHaveFalse('memberName');
                });
            });
            describe('when false', function() {
                it('should confirm', function() {
                    expect({
                        memberName: false
                    }).toHaveFalse('memberName');
                });
            });
        });
        describe('when Boolean object', function() {
            describe('when true', function() {
                it('should deny', function() {
                    expect({
                        memberName: new Boolean(true)
                    }).not.toHaveFalse('memberName');
                });
            });
            describe('when false', function() {
                it('should confirm', function() {
                    expect({
                        memberName: new Boolean(false)
                    }).toHaveFalse('memberName');
                });
            });
        });
    });
});
