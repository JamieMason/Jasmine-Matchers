'use strict';

var callSpy = require('./lib/callSpy');

describe('any.calculable', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy('1');
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.calculable());
    });
});
