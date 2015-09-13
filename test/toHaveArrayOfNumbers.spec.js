'use strict';

/*eslint no-new-wrappers:0*/

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfNumbers', function() {
    describeToHaveArrayX('toHaveArrayOfNumbers', function() {
        describe('when named Array is empty', function() {
            it('should confirm', function() {
                expect({
                    memberName: []
                }).toHaveArrayOfNumbers('memberName');
            });
        });
        describe('when named Array has items', function() {
            describe('when all items are numbers', function() {
                it('should confirm', function() {
                    expect({
                        memberName: [1]
                    }).toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [new Number(1)]
                    }).toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [new Number(0)]
                    }).toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [0, 1]
                    }).toHaveArrayOfNumbers('memberName');
                });
            });
            describe('when any item is not a number', function() {
                it('should deny', function() {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfNumbers('memberName');
                    expect({
                        memberName: [null, 0]
                    }).not.toHaveArrayOfNumbers('memberName');
                });
            });
        });
    });
});
