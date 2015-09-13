'use strict';

var describeToHaveArrayX = require('./lib/describeToHaveArrayX');

describe('toHaveArrayOfObjects', function() {
    describeToHaveArrayX('toHaveArrayOfObjects', function() {
        describe('when named Array is empty', function() {
            it('should confirm', function() {
                expect({
                    memberName: []
                }).toHaveArrayOfObjects('memberName');
            });
        });
        describe('when named Array has items', function() {
            describe('when all items are objects', function() {
                it('should confirm', function() {
                    expect({
                        memberName: [{}]
                    }).toHaveArrayOfObjects('memberName');
                    expect({
                        memberName: [{}, {}]
                    }).toHaveArrayOfObjects('memberName');
                });
            });
            describe('when any item is not an object', function() {
                it('should deny', function() {
                    expect({
                        memberName: [null]
                    }).not.toHaveArrayOfObjects('memberName');
                    expect({
                        memberName: [null, {}]
                    }).not.toHaveArrayOfObjects('memberName');
                });
            });
        });
    });
});
