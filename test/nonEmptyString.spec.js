'use strict';

var callSpy = require('./lib/callSpy');

describe('any.nonEmptyString', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy('hello world');
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.nonEmptyString());
    });
});
