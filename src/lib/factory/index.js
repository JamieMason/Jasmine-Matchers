'use strict';

var adapters = typeof jasmine.addMatchers === 'function' ?
    require('./jasmine-v2') :
    require('./jasmine-v1');

module.exports = function(name, matcher) {
    var adapter = adapters[matcher.length];
    return adapter(name, matcher);
};
