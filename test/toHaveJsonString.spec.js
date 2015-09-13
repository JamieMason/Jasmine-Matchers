'use strict';

var describeToHaveX = require('./lib/describeToHaveX');
var _undefined;

describe('toHaveJsonString', function() {
    describeToHaveX('toHaveJsonString', function() {
        describe('when subject IS a string of parseable JSON', function() {
            it('should confirm', function() {
                expect({
                    memberName: '{}'
                }).toHaveJsonString('memberName');
                expect({
                    memberName: '[]'
                }).toHaveJsonString('memberName');
                expect({
                    memberName: '[1]'
                }).toHaveJsonString('memberName');
            });
        });
        describe('when subject is NOT a string of parseable JSON', function() {
            it('should deny', function() {
                expect({
                    memberName: '[1,]'
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: '<>'
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: null
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: ''
                }).not.toHaveJsonString('memberName');
                expect({
                    memberName: _undefined
                }).not.toHaveJsonString('memberName');
            });
        });
    });
});
