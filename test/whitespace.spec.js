'use strict';

var callSpy = require('./lib/callSpy');

describe('any.whitespace', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy(' \n\t ');
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.whitespace());
    });
});
