'use strict';

var callSpy = require('./lib/callSpy');

describe('any.emptyObject', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy({});
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.emptyObject());
    });
});
