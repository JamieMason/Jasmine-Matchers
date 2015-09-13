'use strict';

/*eslint no-new-wrappers:0*/

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfBooleans', function() {
    describeToHaveArrayX('toHaveArrayOfBooleans', function() {
        describe('when named Array is empty', function() {
            it('should confirm', function() {
                expect({
                    memberName: []
                }).toHaveArrayOfBooleans('memberName');
            });
        });
        describe('when named Array has items', function() {
            describe('when all items are booleans', function() {
                it('should confirm', function() {
                    expect({
                        memberName: [true]
                    }).toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [new Boolean(true)]
                    }).toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [new Boolean(false)]
                    }).toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [false, true]
                    }).toHaveArrayOfBooleans('memberName');
                });
            });
            describe('when any item is not a boolean', function() {
                it('should deny', function() {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfBooleans('memberName');
                    expect({
                        memberName: [null, false]
                    }).not.toHaveArrayOfBooleans('memberName');
                });
            });
        });
    });
});
