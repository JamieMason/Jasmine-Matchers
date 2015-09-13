'use strict';

/*eslint no-array-constructor:0*/

var describeWhenNotArray = require('./lib/describeWhenNotArray');

describe('toBeArray', function() {
    describe('when invoked', function() {
        describe('when subject is a true Array', function() {
            it('should confirm', function() {
                expect([]).toBeArray();
                expect(new Array()).toBeArray();
            });
        });
        describeWhenNotArray('toBeArray');
    });
});
