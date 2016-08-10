'use strict';

var callSpy = require('./lib/callSpy');

describe('any.arrayOfObjects', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy([{}, new Object()]);
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.arrayOfObjects());
    });
});
