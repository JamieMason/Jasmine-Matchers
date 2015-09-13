'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveWhitespaceString', function() {
    describeToHaveX('toHaveWhitespaceString', function() {
        describe('when subject IS a string containing only tabs, spaces, returns etc', function() {
            it('should confirm', function() {
                expect({
                    memberName: ' '
                }).toHaveWhitespaceString('memberName');
                expect({
                    memberName: ''
                }).toHaveWhitespaceString('memberName');
            });
        });
        describe('when subject is NOT a string containing only tabs, spaces, returns etc', function() {
            it('should deny', function() {
                expect({
                    memberName: 'has-no-whitespace'
                }).not.toHaveWhitespaceString('memberName');
                expect({
                    memberName: 'has whitespace'
                }).not.toHaveWhitespaceString('memberName');
                expect({
                    memberName: null
                }).not.toHaveWhitespaceString('memberName');
            });
        });
    });
});
