'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveEmptyObject', function() {
    beforeEach(function() {
        this.Foo = function() {};
    });
    describeToHaveX('toHaveEmptyObject', function() {
        describe('when subject IS an Object with no instance members', function() {
            beforeEach(function() {
                this.Foo.prototype = {
                    b: 2
                };
            });
            it('should confirm', function() {
                expect({
                    memberName: new this.Foo()
                }).toHaveEmptyObject('memberName');
                expect({
                    memberName: {}
                }).toHaveEmptyObject('memberName');
            });
        });
        describe('when subject is NOT an Object with no instance members', function() {
            it('should deny', function() {
                expect({
                    memberName: {
                        a: 1
                    }
                }).not.toHaveEmptyObject('memberName');
                expect({
                    memberName: null
                }).not.toHaveNonEmptyObject('memberName');
            });
        });
    });
});
