'use strict';

/*eslint no-new-wrappers:0*/

var describeToHaveBooleanX = require('./lib/describeToHaveBooleanX');

describe('toHaveTrue', function() {
    describeToHaveBooleanX('toHaveTrue', function() {
        describe('when primitive', function() {
            describe('when true', function() {
                it('should confirm', function() {
                    expect({
                        memberName: true
                    }).toHaveTrue('memberName');
                });
            });
            describe('when false', function() {
                it('should deny', function() {
                    expect({
                        memberName: false
                    }).not.toHaveTrue('memberName');
                });
            });
        });
        describe('when Boolean object', function() {
            describe('when true', function() {
                it('should confirm', function() {
                    expect({
                        memberName: new Boolean(true)
                    }).toHaveTrue('memberName');
                });
            });
            describe('when false', function() {
                it('should deny', function() {
                    expect({
                        memberName: new Boolean(false)
                    }).not.toHaveTrue('memberName');
                });
            });
        });
    });
});
