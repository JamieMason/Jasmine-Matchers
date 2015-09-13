'use strict';

var matcherFactory = require('./matcherFactory');
var memberMatcherFactory = require('./memberMatcherFactory');

module.exports = {
    1: createFactory(getAdapter(1)),
    2: createFactory(getAdapter(2)),
    3: createFactory(getAdapter(3)),
    4: createFactory(getAdapter(4))
};

function createFactory(adapter) {
    return function jasmineV2MatcherFactory(name, matcher) {
        var matcherByName = new JasmineV2Matcher(name, adapter, matcher);
        beforeEach(function() {
            jasmine.addMatchers(matcherByName);
        });
        return matcherByName;
    };
}

function JasmineV2Matcher(name, adapter, matcher) {
    this[name] = adapter(name, matcher);
}

function getAdapter(argsCount) {
    return function adapter(name, matcher) {
        var factory = isMemberMatcher(name) ? memberMatcherFactory : matcherFactory;
        return factory[argsCount](name, matcher);
    };
}

function isMemberMatcher(name) {
    return name.search(/^toHave/) !== -1;
}
