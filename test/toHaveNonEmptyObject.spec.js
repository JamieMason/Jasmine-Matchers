'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveNonEmptyObject', function() {
    describeToHaveX('toHaveNonEmptyObject', function() {
        beforeEach(function() {
            this.Foo = function() {};
        });
        describe('when subject IS an Object with at least one instance member', function() {
            it('should confirm', function() {
                expect({
                    memberName: {
                        a: 1
                    }
                }).toHaveNonEmptyObject('memberName');
            });
        });
        describe('when subject is NOT an Object with at least one instance member', function() {
            beforeEach(function() {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should deny', function() {
                expect({
                    memberName: new this.Foo()
                }).not.toHaveNonEmptyObject('memberName');
                expect({
                    memberName: {}
                }).not.toHaveNonEmptyObject('memberName');
                expect({
                    memberName: null
                }).not.toHaveNonEmptyObject('memberName');
            });
        });
    });
});
