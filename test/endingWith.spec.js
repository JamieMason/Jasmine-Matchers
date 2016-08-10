'use strict';

var callSpy = require('./lib/callSpy');

describe('any.endingWith', function() {
    var shared = {};
    beforeEach(function() {
        shared.spy = callSpy('Guybrush Threepwood');
    });
    it('should confirm', function() {
        expect(shared.spy).toHaveBeenCalledWith(any.endingWith('eepwood'));
    });
});
