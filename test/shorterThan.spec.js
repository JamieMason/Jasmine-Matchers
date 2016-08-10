'use strict';

var callSpy = require('./lib/callSpy');

describe('any.shorterThan', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy('skeletor');
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.shorterThan('trogdor the burninator'));
    });
});
