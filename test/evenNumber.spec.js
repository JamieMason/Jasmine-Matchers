'use strict';

var callSpy = require('./lib/callSpy');

describe('any.evenNumber', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy(4);
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.evenNumber());
    });
});
