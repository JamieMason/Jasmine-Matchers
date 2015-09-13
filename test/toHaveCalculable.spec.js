'use strict';

var describeToHaveX = require('./lib/describeToHaveX');

describe('toHaveCalculable', function() {
    describeToHaveX('toHaveCalculable', function() {
        describe('when subject CAN be coerced to be used in mathematical operations', function() {
            it('should confirm', function() {
                expect({
                    memberName: '1'
                }).toHaveCalculable('memberName');
                expect({
                    memberName: ''
                }).toHaveCalculable('memberName');
                expect({
                    memberName: null
                }).toHaveCalculable('memberName');
            });
        });
        describe('when subject can NOT be coerced by JavaScript to be used in mathematical operations', function() {
            it('should deny', function() {
                expect({
                    memberName: {}
                }).not.toHaveCalculable('memberName');
                expect({
                    memberName: NaN
                }).not.toHaveCalculable('memberName');
            });
        });
    });
});
