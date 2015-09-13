'use strict';

/*eslint no-new-wrappers:0*/

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfStrings', function() {
    describeToHaveArrayX('toHaveArrayOfStrings', function() {
        describe('when named Array is empty', function() {
            it('should confirm', function() {
                expect({
                    memberName: []
                }).toHaveArrayOfStrings('memberName');
            });
        });
        describe('when named Array has items', function() {
            describe('when all items are strings', function() {
                it('should confirm', function() {
                    expect({
                        memberName: ['truthy']
                    }).toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: [new String('truthy')]
                    }).toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: [new String('')]
                    }).toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: ['', 'truthy']
                    }).toHaveArrayOfStrings('memberName');
                });
            });
            describe('when any item is not a string', function() {
                it('should deny', function() {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfStrings('memberName');
                    expect({
                        memberName: [null, '']
                    }).not.toHaveArrayOfStrings('memberName');
                });
            });
        });
    });
});
