'use strict';

var describeWhenNotArray = require('./describeWhenNotArray');

module.exports = describeToBeArrayOfX;

function describeToBeArrayOfX(name, options) {
    describe(name, function() {
        describe('when invoked', function() {
            describe('when subject is a true Array', function() {
                describe('when subject has no members', function() {
                    it('should confirm (an empty array of ' + options.type + 's is valid)', function() {
                        expect([])[name]();
                    });
                });
                describe('when subject has members', function() {
                    describe('when subject has a mix of ' + options.type + 's and other items', function() {
                        it('should deny', options.whenMixed);
                    });
                    describe('when subject has only ' + options.type + 's', function() {
                        it('should confirm', options.whenValid);
                    });
                    describe('when subject has other items', function() {
                        it('should deny', options.whenInvalid);
                    });
                });
            });
            describeWhenNotArray(name);
        });
    });
}
