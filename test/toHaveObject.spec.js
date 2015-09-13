'use strict';

/*eslint no-new-object:0*/

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveObject', function() {
    describeToHaveX('toHaveObject', function() {
        beforeEach(function() {
            this.Foo = function() {};
        });
        describe('when subject IS an Object', function() {
            it('should confirm', function() {
                expect({
                    memberName: new Object()
                }).toHaveObject('memberName');
                expect({
                    memberName: new this.Foo()
                }).toHaveObject('memberName');
                expect({
                    memberName: {}
                }).toHaveObject('memberName');
            });
        });
        describe('when subject is NOT an Object', function() {
            it('should deny', function() {
                expect({
                    memberName: null
                }).not.toHaveObject('memberName');
                expect({
                    memberName: 123
                }).not.toHaveObject('memberName');
                expect({
                    memberName: '[object Object]'
                }).not.toHaveObject('memberName');
            });
        });
    });
});
