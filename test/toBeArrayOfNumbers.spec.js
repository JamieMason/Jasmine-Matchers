'use strict';

/*eslint no-new-wrappers:0*/

var describeToBeArrayOfX = require('./lib/describeToBeArrayOfX');

describe('toBeArrayOfNumbers', function() {
    describeToBeArrayOfX('toBeArrayOfNumbers', {
        type: 'Number',
        whenValid: function() {
            expect([1]).toBeArrayOfNumbers();
            expect([new Number(1)]).toBeArrayOfNumbers();
            expect([new Number(0)]).toBeArrayOfNumbers();
            expect([0, 1]).toBeArrayOfNumbers();
        },
        whenInvalid: function() {
            expect([null]).not.toBeArrayOfNumbers();
        },
        whenMixed: function() {
            expect([null, 0]).not.toBeArrayOfNumbers();
        }
    });
});
