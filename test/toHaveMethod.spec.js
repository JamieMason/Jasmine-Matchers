'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveMethod', function() {
    describeToHaveX('toHaveMethod', function() {
        describe('when subject IS a function', function() {
            it('should confirm', function() {
                expect({
                    memberName: function() {}
                }).toHaveMethod('memberName');
            });
        });
        describe('when subject is NOT a function', function() {
            it('should deny', function() {
                expect({
                    memberName: /regexp/
                }).not.toHaveMethod('memberName');
            });
        });
    });
});
