(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == 'function' && require;
                if (!u && a) {
                    return a(o, !0);
                }
                if (i) {
                    return i(o, !0);
                }
                var f = new Error('Cannot find module \'' + o + '\'');
                throw f.code = 'MODULE_NOT_FOUND', f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
    }
    var i = typeof require == 'function' && require;
    for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }
    return s;
})({
    1: [function(require, module, exports) {
        'use strict';

        module.exports = require('./src');

    }, {
        './src': 2
    }],
    2: [function(require, module, exports) {
        'use strict';

        var adapters = typeof jasmine.addMatchers === 'function' ?
            require('./jasmine-v2') :
            require('./jasmine-v1');

        module.exports = {
            add: addMatchers
        };

        function addMatchers(matchers) {
            for (var matcherName in matchers) {
                addMatcher(matcherName, matchers[matcherName]);
            }
        }

        function addMatcher(name, matcher) {
            var adapter = adapters[matcher.length];
            return adapter(name, matcher);
        }

    }, {
        './jasmine-v1': 3,
        './jasmine-v2': 4
    }],
    3: [function(require, module, exports) {
        'use strict';

        module.exports = {
            1: createFactory(forActual),
            2: createFactory(forActualAndExpected),
            3: createFactory(forActualAndTwoExpected),
            4: createFactory(forKeyAndActualAndTwoExpected)
        };

        function createFactory(adapter) {
            return function jasmineV1MatcherFactory(name, matcher) {
                var matcherByName = new JasmineV1Matcher(name, adapter, matcher);
                beforeEach(function() {
                    this.addMatchers(matcherByName);
                });
                return matcherByName;
            };
        }

        function JasmineV1Matcher(name, adapter, matcher) {
            this[name] = adapter(name, matcher);
        }

        function forActual(name, matcher) {
            return function(optionalMessage) {
                return matcher(this.actual, optionalMessage);
            };
        }

        function forActualAndExpected(name, matcher) {
            return function(expected, optionalMessage) {
                return matcher(expected, this.actual, optionalMessage);
            };
        }

        function forActualAndTwoExpected(name, matcher) {
            return function(expected1, expected2, optionalMessage) {
                return matcher(expected1, expected2, this.actual, optionalMessage);
            };
        }

        function forKeyAndActualAndTwoExpected(name, matcher) {
            return function(key, expected1, expected2, optionalMessage) {
                return matcher(key, expected1, expected2, this.actual, optionalMessage);
            };
        }

    }, {}],
    4: [function(require, module, exports) {
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

    }, {
        './matcherFactory': 5,
        './memberMatcherFactory': 6
    }],
    5: [function(require, module, exports) {
        'use strict';

        module.exports = {
            1: forActual,
            2: forActualAndExpected,
            3: forActualAndTwoExpected
        };

        function forActual(name, matcher) {
            return function(util) {
                return {
                    compare: function(actual, optionalMessage) {
                        var passes = matcher(actual);
                        return {
                            pass: passes,
                            message: (
                            optionalMessage ?
                                util.buildFailureMessage(name, passes, actual, optionalMessage) :
                                util.buildFailureMessage(name, passes, actual)
                            )
                        };
                    }
                };
            };
        }

        function forActualAndExpected(name, matcher) {
            return function(util) {
                return {
                    compare: function(actual, expected, optionalMessage) {
                        var passes = matcher(expected, actual);
                        return {
                            pass: passes,
                            message: (
                            optionalMessage ?
                                util.buildFailureMessage(name, passes, actual, expected, optionalMessage) :
                                util.buildFailureMessage(name, passes, actual, expected)
                            )
                        };
                    }
                };
            };
        }

        function forActualAndTwoExpected(name, matcher) {
            return function(util) {
                return {
                    compare: function(actual, expected1, expected2, optionalMessage) {
                        var passes = matcher(expected1, expected2, actual);
                        return {
                            pass: passes,
                            message: (
                            optionalMessage ?
                                util.buildFailureMessage(name, passes, actual, expected1, expected2, optionalMessage) :
                                util.buildFailureMessage(name, passes, actual, expected1, expected2)
                            )
                        };
                    }
                };
            };
        }

    }, {}],
    6: [function(require, module, exports) {
        'use strict';

        module.exports = {
            2: forKeyAndActual,
            3: forKeyAndActualAndExpected,
            4: forKeyAndActualAndTwoExpected
        };

        function forKeyAndActual(name, matcher) {
            return function(util) {
                return {
                    compare: function(actual, key, optionalMessage) {
                        var passes = matcher(key, actual);
                        var message = name.search(/^toHave/) !== -1 ? key : optionalMessage;
                        return {
                            pass: passes,
                            message: (
                            message ?
                                util.buildFailureMessage(name, passes, actual, message) :
                                util.buildFailureMessage(name, passes, actual)
                            )
                        };
                    }
                };
            };
        }

        function forKeyAndActualAndExpected(name, matcher) {
            return function(util) {
                return {
                    compare: function(actual, key, expected, optionalMessage) {
                        var passes = matcher(key, expected, actual);
                        var message = (optionalMessage ?
                            util.buildFailureMessage(name, passes, actual, expected, optionalMessage) :
                            util.buildFailureMessage(name, passes, actual, expected)
                        );

                        return {
                            pass: passes,
                            message: formatErrorMessage(name, message, key)
                        };
                    }
                };
            };
        }

        function forKeyAndActualAndTwoExpected(name, matcher) {
            return function(util) {
                return {
                    compare: function(actual, key, expected1, expected2, optionalMessage) {
                        var passes = matcher(key, expected1, expected2, actual);
                        var message = (optionalMessage ?
                            util.buildFailureMessage(name, passes, actual, expected1, expected2, optionalMessage) :
                            util.buildFailureMessage(name, passes, actual, expected1, expected2)
                        );

                        return {
                            pass: passes,
                            message: formatErrorMessage(name, message, key)
                        };
                    }
                };
            };
        }

        function formatErrorMessage(name, message, key) {
            if (name.search(/^toHave/) !== -1) {
                return message
                    .replace('Expected', 'Expected member "' + key + '" of')
                    .replace(' to have ', ' to be ');
            }
            return message;
        }

    }, {}],
    7: [function(require, module, exports) {
        'use strict';

        module.exports = {
            asymmetricMatcher: [{
                name: 'after',
                matcher: 'toBeAfter'
            }, {
                name: 'arrayOfBooleans',
                matcher: 'toBeArrayOfBooleans'
            }, {
                name: 'arrayOfNumbers',
                matcher: 'toBeArrayOfNumbers'
            }, {
                name: 'arrayOfObjects',
                matcher: 'toBeArrayOfObjects'
            }, {
                name: 'arrayOfSize',
                matcher: 'toBeArrayOfSize'
            }, {
                name: 'arrayOfStrings',
                matcher: 'toBeArrayOfStrings'
            }, {
                name: 'before',
                matcher: 'toBeBefore'
            }, {
                name: 'calculable',
                matcher: 'toBeCalculable'
            }, {
                name: 'emptyArray',
                matcher: 'toBeEmptyArray'
            }, {
                name: 'emptyObject',
                matcher: 'toBeEmptyObject'
            }, {
                name: 'evenNumber',
                matcher: 'toBeEvenNumber'
            }, {
                name: 'greaterThanOrEqualTo',
                matcher: 'toBeGreaterThanOrEqualTo'
            }, {
                name: 'iso8601',
                matcher: 'toBeIso8601'
            }, {
                name: 'jsonString',
                matcher: 'toBeJsonString'
            }, {
                name: 'lessThanOrEqualTo',
                matcher: 'toBeLessThanOrEqualTo'
            }, {
                name: 'longerThan',
                matcher: 'toBeLongerThan'
            }, {
                name: 'nonEmptyArray',
                matcher: 'toBeNonEmptyArray'
            }, {
                name: 'nonEmptyObject',
                matcher: 'toBeNonEmptyObject'
            }, {
                name: 'nonEmptyString',
                matcher: 'toBeNonEmptyString'
            }, {
                name: 'oddNumber',
                matcher: 'toBeOddNumber'
            }, {
                name: 'sameLengthAs',
                matcher: 'toBeSameLengthAs'
            }, {
                name: 'shorterThan',
                matcher: 'toBeShorterThan'
            }, {
                name: 'whitespace',
                matcher: 'toBeWhitespace'
            }, {
                name: 'wholeNumber',
                matcher: 'toBeWholeNumber'
            }, {
                name: 'withinRange',
                matcher: 'toBeWithinRange'
            }, {
                name: 'endingWith',
                matcher: 'toEndWith'
            }, {
                name: 'startingWith',
                matcher: 'toStartWith'
            }],
            matcher: {
                toBeAfter: require('./toBeAfter'),
                toBeArray: require('./toBeArray'),
                toBeArrayOfBooleans: require('./toBeArrayOfBooleans'),
                toBeArrayOfNumbers: require('./toBeArrayOfNumbers'),
                toBeArrayOfObjects: require('./toBeArrayOfObjects'),
                toBeArrayOfSize: require('./toBeArrayOfSize'),
                toBeArrayOfStrings: require('./toBeArrayOfStrings'),
                toBeBefore: require('./toBeBefore'),
                toBeBoolean: require('./toBeBoolean'),
                toBeCalculable: require('./toBeCalculable'),
                toBeDate: require('./toBeDate'),
                toBeEmptyArray: require('./toBeEmptyArray'),
                toBeEmptyObject: require('./toBeEmptyObject'),
                toBeEmptyString: require('./toBeEmptyString'),
                toBeEvenNumber: require('./toBeEvenNumber'),
                toBeFalse: require('./toBeFalse'),
                toBeFunction: require('./toBeFunction'),
                toBeGreaterThanOrEqualTo: require('./toBeGreaterThanOrEqualTo'),
                toBeHtmlString: require('./toBeHtmlString'),
                toBeIso8601: require('./toBeIso8601'),
                toBeJsonString: require('./toBeJsonString'),
                toBeLessThanOrEqualTo: require('./toBeLessThanOrEqualTo'),
                toBeLongerThan: require('./toBeLongerThan'),
                toBeNonEmptyArray: require('./toBeNonEmptyArray'),
                toBeNonEmptyObject: require('./toBeNonEmptyObject'),
                toBeNonEmptyString: require('./toBeNonEmptyString'),
                toBeNumber: require('./toBeNumber'),
                toBeObject: require('./toBeObject'),
                toBeOddNumber: require('./toBeOddNumber'),
                toBeSameLengthAs: require('./toBeSameLengthAs'),
                toBeShorterThan: require('./toBeShorterThan'),
                toBeString: require('./toBeString'),
                toBeTrue: require('./toBeTrue'),
                toBeWhitespace: require('./toBeWhitespace'),
                toBeWholeNumber: require('./toBeWholeNumber'),
                toBeWithinRange: require('./toBeWithinRange'),
                toEndWith: require('./toEndWith'),
                toHaveArray: require('./toHaveArray'),
                toHaveArrayOfBooleans: require('./toHaveArrayOfBooleans'),
                toHaveArrayOfNumbers: require('./toHaveArrayOfNumbers'),
                toHaveArrayOfObjects: require('./toHaveArrayOfObjects'),
                toHaveArrayOfSize: require('./toHaveArrayOfSize'),
                toHaveArrayOfStrings: require('./toHaveArrayOfStrings'),
                toHaveBoolean: require('./toHaveBoolean'),
                toHaveCalculable: require('./toHaveCalculable'),
                toHaveDate: require('./toHaveDate'),
                toHaveDateAfter: require('./toHaveDateAfter'),
                toHaveDateBefore: require('./toHaveDateBefore'),
                toHaveEmptyArray: require('./toHaveEmptyArray'),
                toHaveEmptyObject: require('./toHaveEmptyObject'),
                toHaveEmptyString: require('./toHaveEmptyString'),
                toHaveEvenNumber: require('./toHaveEvenNumber'),
                toHaveFalse: require('./toHaveFalse'),
                toHaveHtmlString: require('./toHaveHtmlString'),
                toHaveIso8601: require('./toHaveIso8601'),
                toHaveJsonString: require('./toHaveJsonString'),
                toHaveMember: require('./toHaveMember'),
                toHaveMethod: require('./toHaveMethod'),
                toHaveNonEmptyArray: require('./toHaveNonEmptyArray'),
                toHaveNonEmptyObject: require('./toHaveNonEmptyObject'),
                toHaveNonEmptyString: require('./toHaveNonEmptyString'),
                toHaveNumber: require('./toHaveNumber'),
                toHaveNumberWithinRange: require('./toHaveNumberWithinRange'),
                toHaveObject: require('./toHaveObject'),
                toHaveOddNumber: require('./toHaveOddNumber'),
                toHaveString: require('./toHaveString'),
                toHaveStringLongerThan: require('./toHaveStringLongerThan'),
                toHaveStringSameLengthAs: require('./toHaveStringSameLengthAs'),
                toHaveStringShorterThan: require('./toHaveStringShorterThan'),
                toHaveTrue: require('./toHaveTrue'),
                toHaveWhitespaceString: require('./toHaveWhitespaceString'),
                toHaveWholeNumber: require('./toHaveWholeNumber'),
                toImplement: require('./toImplement'),
                toStartWith: require('./toStartWith'),
                toThrowAnyError: require('./toThrowAnyError'),
                toThrowErrorOfType: require('./toThrowErrorOfType')
            }
        };

    }, {
        './toBeAfter': 14,
        './toBeArray': 15,
        './toBeArrayOfBooleans': 16,
        './toBeArrayOfNumbers': 17,
        './toBeArrayOfObjects': 18,
        './toBeArrayOfSize': 19,
        './toBeArrayOfStrings': 20,
        './toBeBefore': 21,
        './toBeBoolean': 22,
        './toBeCalculable': 23,
        './toBeDate': 24,
        './toBeEmptyArray': 25,
        './toBeEmptyObject': 26,
        './toBeEmptyString': 27,
        './toBeEvenNumber': 28,
        './toBeFalse': 29,
        './toBeFunction': 30,
        './toBeGreaterThanOrEqualTo': 31,
        './toBeHtmlString': 32,
        './toBeIso8601': 33,
        './toBeJsonString': 34,
        './toBeLessThanOrEqualTo': 35,
        './toBeLongerThan': 36,
        './toBeNonEmptyArray': 37,
        './toBeNonEmptyObject': 38,
        './toBeNonEmptyString': 39,
        './toBeNumber': 40,
        './toBeObject': 41,
        './toBeOddNumber': 42,
        './toBeSameLengthAs': 43,
        './toBeShorterThan': 44,
        './toBeString': 45,
        './toBeTrue': 46,
        './toBeWhitespace': 47,
        './toBeWholeNumber': 48,
        './toBeWithinRange': 49,
        './toEndWith': 50,
        './toHaveArray': 51,
        './toHaveArrayOfBooleans': 52,
        './toHaveArrayOfNumbers': 53,
        './toHaveArrayOfObjects': 54,
        './toHaveArrayOfSize': 55,
        './toHaveArrayOfStrings': 56,
        './toHaveBoolean': 57,
        './toHaveCalculable': 58,
        './toHaveDate': 59,
        './toHaveDateAfter': 60,
        './toHaveDateBefore': 61,
        './toHaveEmptyArray': 62,
        './toHaveEmptyObject': 63,
        './toHaveEmptyString': 64,
        './toHaveEvenNumber': 65,
        './toHaveFalse': 66,
        './toHaveHtmlString': 67,
        './toHaveIso8601': 68,
        './toHaveJsonString': 69,
        './toHaveMember': 70,
        './toHaveMethod': 71,
        './toHaveNonEmptyArray': 72,
        './toHaveNonEmptyObject': 73,
        './toHaveNonEmptyString': 74,
        './toHaveNumber': 75,
        './toHaveNumberWithinRange': 76,
        './toHaveObject': 77,
        './toHaveOddNumber': 78,
        './toHaveString': 79,
        './toHaveStringLongerThan': 80,
        './toHaveStringSameLengthAs': 81,
        './toHaveStringShorterThan': 82,
        './toHaveTrue': 83,
        './toHaveWhitespaceString': 84,
        './toHaveWholeNumber': 85,
        './toImplement': 86,
        './toStartWith': 87,
        './toThrowAnyError': 88,
        './toThrowErrorOfType': 89
    }],
    8: [function(require, module, exports) {
        'use strict';

        // modules
        var reduce = require('./lib/reduce');
        var api = require('./api');

        // implementation
        module.exports = reduce(api.asymmetricMatcher, register, {});

        function register(any, asymMatcher) {
            var matcher = api.matcher[asymMatcher.matcher];
            any[asymMatcher.name] = createFactory(matcher);
            return any;
        }

        function createFactory(matcher) {
            return function asymmetricMatcherFactory() {
                var args = [].slice.call(arguments);
                return {
                    asymmetricMatch: function asymmetricMatcher(actual) {
                        var clone = args.slice();
                        clone.push(actual);
                        return matcher.apply(this, clone);
                    }
                };
            };
        }

    }, {
        './api': 7,
        './lib/reduce': 13
    }],
    9: [function(require, module, exports) {
        (function(global) {
            'use strict';

            /*
             * Copyright © Jamie Mason, @fold_left,
             * https://github.com/JamieMason
             *
             * Permission is hereby granted, free of charge, to any person
             * obtaining a copy of this software and associated documentation files
             * (the "Software"), to deal in the Software without restriction,
             * including without limitation the rights to use, copy, modify, merge,
             * publish, distribute, sublicense, and/or sell copies of the Software,
             * and to permit persons to whom the Software is furnished to do so,
             * subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be
             * included in all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
             * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
             * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
             * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
             * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
             * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
             * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */

            // 3rd party modules
            var loader = require('jasmine-matchers-loader');

            // modules
            var api = require('./api');
            var asymmetricMatchers = require('./asymmetricMatchers');

            // public
            module.exports = api.matcher;

            // implementation
            loader.add(api.matcher);
            global.any = asymmetricMatchers;

        }).call(this, typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
    }, {
        './api': 7,
        './asymmetricMatchers': 8,
        'jasmine-matchers-loader': 1
    }],
    10: [function(require, module, exports) {
        'use strict';

        module.exports = every;

        function every(array, truthTest) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (!truthTest(array[i])) {
                    return false;
                }
            }
            return true;
        }

    }, {}],
    11: [function(require, module, exports) {
        'use strict';

        module.exports = is;

        function is(value, type) {
            return Object.prototype.toString.call(value) === '[object ' + type + ']';
        }

    }, {}],
    12: [function(require, module, exports) {
        'use strict';

        module.exports = keys;

        function keys(object) {
            var list = [];
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    list.push(key);
                }
            }
            return list;
        }

    }, {}],
    13: [function(require, module, exports) {
        'use strict';

        var is = require('./is');

        module.exports = reduce;

        function reduce(collection, fn, memo) {
            if (is(collection, 'Array')) {
                for (var i = 0, len = collection.length; i < len; i++) {
                    memo = fn(memo, collection[i], i, collection);
                }
            } else {
                for (var key in collection) {
                    if (collection.hasOwnProperty(key)) {
                        memo = fn(memo, collection[key], key, collection);
                    }
                }
            }
            return memo;
        }

    }, {
        './is': 11
    }],
    14: [function(require, module, exports) {
        'use strict';

        var toBeBefore = require('./toBeBefore');

        module.exports = toBeAfter;

        function toBeAfter(otherDate, actual) {
            return toBeBefore(actual, otherDate);
        }

    }, {
        './toBeBefore': 21
    }],
    15: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeArray;

        function toBeArray(actual) {
            return is(actual, 'Array');
        }

    }, {
        './lib/is': 11
    }],
    16: [function(require, module, exports) {
        'use strict';

        var every = require('./lib/every');
        var toBeArray = require('./toBeArray');
        var toBeBoolean = require('./toBeBoolean');

        module.exports = toBeArrayOfBooleans;

        function toBeArrayOfBooleans(actual) {
            return toBeArray(actual) &&
                every(actual, toBeBoolean);
        }

    }, {
        './lib/every': 10,
        './toBeArray': 15,
        './toBeBoolean': 22
    }],
    17: [function(require, module, exports) {
        'use strict';

        var every = require('./lib/every');
        var toBeArray = require('./toBeArray');
        var toBeNumber = require('./toBeNumber');

        module.exports = toBeArrayOfBooleans;

        function toBeArrayOfBooleans(actual) {
            return toBeArray(actual) &&
                every(actual, toBeNumber);
        }

    }, {
        './lib/every': 10,
        './toBeArray': 15,
        './toBeNumber': 40
    }],
    18: [function(require, module, exports) {
        'use strict';

        var every = require('./lib/every');
        var toBeArray = require('./toBeArray');
        var toBeObject = require('./toBeObject');

        module.exports = toBeArrayOfBooleans;

        function toBeArrayOfBooleans(actual) {
            return toBeArray(actual) &&
                every(actual, toBeObject);
        }

    }, {
        './lib/every': 10,
        './toBeArray': 15,
        './toBeObject': 41
    }],
    19: [function(require, module, exports) {
        'use strict';

        var toBeArray = require('./toBeArray');

        module.exports = toBeArrayOfSize;

        function toBeArrayOfSize(size, actual) {
            return toBeArray(actual) &&
                actual.length === size;
        }

    }, {
        './toBeArray': 15
    }],
    20: [function(require, module, exports) {
        'use strict';

        var every = require('./lib/every');
        var toBeArray = require('./toBeArray');
        var toBeString = require('./toBeString');

        module.exports = toBeArrayOfStrings;

        function toBeArrayOfStrings(actual) {
            return toBeArray(actual) &&
                every(actual, toBeString);
        }

    }, {
        './lib/every': 10,
        './toBeArray': 15,
        './toBeString': 45
    }],
    21: [function(require, module, exports) {
        'use strict';

        var toBeDate = require('./toBeDate');

        module.exports = toBeBefore;

        function toBeBefore(otherDate, actual) {
            return toBeDate(actual) &&
                toBeDate(otherDate) &&
                actual.getTime() < otherDate.getTime();
        }

    }, {
        './toBeDate': 24
    }],
    22: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeBoolean;

        function toBeBoolean(actual) {
            return is(actual, 'Boolean');
        }

    }, {
        './lib/is': 11
    }],
    23: [function(require, module, exports) {
        'use strict';

        module.exports = toBeCalculable;

        // Assert subject can be used in Mathemetic
        // calculations despite not being a Number,
        // for example `"1" * "2" === 2` whereas
        // `"wut?" * 2 === NaN`.
        function toBeCalculable(actual) {
            return !isNaN(actual * 2);
        }

    }, {}],
    24: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeDate;

        function toBeDate(actual) {
            return is(actual, 'Date');
        }

    }, {
        './lib/is': 11
    }],
    25: [function(require, module, exports) {
        'use strict';

        var toBeArrayOfSize = require('./toBeArrayOfSize');

        module.exports = toBeEmptyArray;

        function toBeEmptyArray(actual) {
            return toBeArrayOfSize(0, actual);
        }

    }, {
        './toBeArrayOfSize': 19
    }],
    26: [function(require, module, exports) {
        'use strict';

        var keys = require('./lib/keys');
        var is = require('./lib/is');

        module.exports = toBeEmptyObject;

        function toBeEmptyObject(actual) {
            return is(actual, 'Object') &&
                keys(actual).length === 0;
        }

    }, {
        './lib/is': 11,
        './lib/keys': 12
    }],
    27: [function(require, module, exports) {
        'use strict';

        module.exports = toBeEmptyString;

        function toBeEmptyString(actual) {
            return actual === '';
        }

    }, {}],
    28: [function(require, module, exports) {
        'use strict';

        var toBeNumber = require('./toBeNumber');

        module.exports = toBeEvenNumber;

        function toBeEvenNumber(actual) {
            return toBeNumber(actual) &&
                actual % 2 === 0;
        }

    }, {
        './toBeNumber': 40
    }],
    29: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeFalse;

        function toBeFalse(actual) {
            return actual === false ||
                is(actual, 'Boolean') &&
                !actual.valueOf();
        }

    }, {
        './lib/is': 11
    }],
    30: [function(require, module, exports) {
        'use strict';

        module.exports = toBeFunction;

        function toBeFunction(actual) {
            return typeof actual === 'function';
        }

    }, {}],
    31: [function(require, module, exports) {
        'use strict';

        var toBeNumber = require('./toBeNumber');

        module.exports = toBeGreaterThanOrEqualTo;

        function toBeGreaterThanOrEqualTo(otherNumber, actual) {
            return toBeNumber(actual) && actual >= otherNumber;
        }

    }, {
        './toBeNumber': 40
    }],
    32: [function(require, module, exports) {
        'use strict';

        var toBeString = require('./toBeString');

        module.exports = toBeHtmlString;

        function toBeHtmlString(actual) {
            // <           start with opening tag "<"
            //  (          start group 1
            //    "[^"]*"  allow string in "double quotes"
            //    |        OR
            //    '[^']*'  allow string in "single quotes"
            //    |        OR
            //    [^'">]   cant contains one single quotes, double quotes and ">"
            //  )          end group 1
            //  *          0 or more
            // >           end with closing tag ">"
            return toBeString(actual) &&
                actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
        }

    }, {
        './toBeString': 45
    }],
    33: [function(require, module, exports) {
        'use strict';

        var toBeString = require('./toBeString');

        module.exports = toBeIso8601;

        function toBeIso8601(actual) {

            if (!toBeString(actual)) {
                return false;
            }

            if (
                isIso8601(actual, [
                    // 2013-07-08
                    4, '-', 2, '-', 2
                ]) || isIso8601(actual, [
                    // 2013-07-08T07:29
                    4, '-', 2, '-', 2, 'T', 2, ':', 2
                ]) || isIso8601(actual, [
                    // 2013-07-08T07:29:15
                    4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2
                ]) || isIso8601(actual, [
                    // 2013-07-08T07:29:15.863
                    4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3
                ]) || isIso8601(actual, [
                    // 2013-07-08T07:29:15.863Z
                    4, '-', 2, '-', 2, 'T', 2, ':', 2, ':', 2, '.', 3, 'Z'
                ])
            ) {
                return new Date(actual).toString() !== 'Invalid Date';
            }

            return false;
        }

        function isIso8601(string, pattern) {
            var returnValue = string.search(
                new RegExp('^' + pattern.map(escapeTerm).join('') + '$')
            ) !== -1;
            return returnValue;

            function escapeTerm(term) {
                if (term === '-') {
                    return '\\-';
                } else if (typeof term === 'string') {
                    return term;
                } else {
                    return '([0-9]{' + term + '})';
                }
            }
        }

    }, {
        './toBeString': 45
    }],
    34: [function(require, module, exports) {
        'use strict';

        module.exports = toBeJsonString;

        function toBeJsonString(actual) {
            var isParseable;
            var json;
            try {
                json = JSON.parse(actual);
            } catch (e) {
                isParseable = false;
            }
            return isParseable !== false &&
                json !== null;
        }

    }, {}],
    35: [function(require, module, exports) {
        'use strict';

        var toBeNumber = require('./toBeNumber');

        module.exports = toBeLessThanOrEqualTo;

        function toBeLessThanOrEqualTo(otherNumber, actual) {
            return toBeNumber(actual) && actual <= otherNumber;
        }

    }, {
        './toBeNumber': 40
    }],
    36: [function(require, module, exports) {
        'use strict';

        var toBeString = require('./toBeString');

        module.exports = toBeLongerThan;

        function toBeLongerThan(otherString, actual) {
            return toBeString(actual) &&
                toBeString(otherString) &&
                actual.length > otherString.length;
        }

    }, {
        './toBeString': 45
    }],
    37: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeNonEmptyArray;

        function toBeNonEmptyArray(actual) {
            return is(actual, 'Array') &&
                actual.length > 0;
        }

    }, {
        './lib/is': 11
    }],
    38: [function(require, module, exports) {
        'use strict';

        var keys = require('./lib/keys');
        var is = require('./lib/is');

        module.exports = toBeNonEmptyObject;

        function toBeNonEmptyObject(actual) {
            return is(actual, 'Object') &&
                keys(actual).length > 0;
        }

    }, {
        './lib/is': 11,
        './lib/keys': 12
    }],
    39: [function(require, module, exports) {
        'use strict';

        var toBeString = require('./toBeString');

        module.exports = toBeNonEmptyString;

        function toBeNonEmptyString(actual) {
            return toBeString(actual) &&
                actual.length > 0;
        }

    }, {
        './toBeString': 45
    }],
    40: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeNumber;

        function toBeNumber(actual) {
            return !isNaN(parseFloat(actual)) &&
                !is(actual, 'String');
        }

    }, {
        './lib/is': 11
    }],
    41: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeObject;

        function toBeObject(actual) {
            return is(actual, 'Object');
        }

    }, {
        './lib/is': 11
    }],
    42: [function(require, module, exports) {
        'use strict';

        var toBeNumber = require('./toBeNumber');

        module.exports = toBeOddNumber;

        function toBeOddNumber(actual) {
            return toBeNumber(actual) &&
                actual % 2 !== 0;
        }

    }, {
        './toBeNumber': 40
    }],
    43: [function(require, module, exports) {
        'use strict';

        var toBeString = require('./toBeString');

        module.exports = toBeSameLengthAs;

        function toBeSameLengthAs(otherString, actual) {
            return toBeString(actual) &&
                toBeString(otherString) &&
                actual.length === otherString.length;
        }

    }, {
        './toBeString': 45
    }],
    44: [function(require, module, exports) {
        'use strict';

        var toBeString = require('./toBeString');

        module.exports = toBeShorterThan;

        function toBeShorterThan(otherString, actual) {
            return toBeString(actual) &&
                toBeString(otherString) &&
                actual.length < otherString.length;
        }

    }, {
        './toBeString': 45
    }],
    45: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeString;

        function toBeString(actual) {
            return is(actual, 'String');
        }

    }, {
        './lib/is': 11
    }],
    46: [function(require, module, exports) {
        'use strict';

        var is = require('./lib/is');

        module.exports = toBeTrue;

        function toBeTrue(actual) {
            return actual === true ||
                is(actual, 'Boolean') &&
                actual.valueOf();
        }

    }, {
        './lib/is': 11
    }],
    47: [function(require, module, exports) {
        'use strict';

        var toBeString = require('./toBeString');

        module.exports = toBeWhitespace;

        function toBeWhitespace(actual) {
            return toBeString(actual) &&
                actual.search(/\S/) === -1;
        }

    }, {
        './toBeString': 45
    }],
    48: [function(require, module, exports) {
        'use strict';

        var toBeNumber = require('./toBeNumber');

        module.exports = toBeWholeNumber;

        function toBeWholeNumber(actual) {
            return toBeNumber(actual) && (
                actual === 0 || actual % 1 === 0
                );
        }

    }, {
        './toBeNumber': 40
    }],
    49: [function(require, module, exports) {
        'use strict';

        var toBeNumber = require('./toBeNumber');

        module.exports = toBeWithinRange;

        function toBeWithinRange(floor, ceiling, actual) {
            return toBeNumber(actual) &&
                actual >= floor &&
                actual <= ceiling;
        }

    }, {
        './toBeNumber': 40
    }],
    50: [function(require, module, exports) {
        'use strict';

        var toBeNonEmptyString = require('./toBeNonEmptyString');

        module.exports = toEndWith;

        function toEndWith(subString, actual) {
            if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
                return false;
            }
            return actual.slice(actual.length - subString.length, actual.length) === subString;
        }

    }, {
        './toBeNonEmptyString': 39
    }],
    51: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeArray = require('./toBeArray');

        module.exports = toHaveArray;

        function toHaveArray(key, actual) {
            return toBeObject(actual) &&
                toBeArray(actual[key]);
        }

    }, {
        './toBeArray': 15,
        './toBeObject': 41
    }],
    52: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

        module.exports = toHaveArrayOfBooleans;

        function toHaveArrayOfBooleans(key, actual) {
            return toBeObject(actual) &&
                toBeArrayOfBooleans(actual[key]);
        }

    }, {
        './toBeArrayOfBooleans': 16,
        './toBeObject': 41
    }],
    53: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

        module.exports = toHaveArrayOfNumbers;

        function toHaveArrayOfNumbers(key, actual) {
            return toBeObject(actual) &&
                toBeArrayOfNumbers(actual[key]);
        }

    }, {
        './toBeArrayOfNumbers': 17,
        './toBeObject': 41
    }],
    54: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeArrayOfObjects = require('./toBeArrayOfObjects');

        module.exports = toHaveArrayOfObjects;

        function toHaveArrayOfObjects(key, actual) {
            return toBeObject(actual) &&
                toBeArrayOfObjects(actual[key]);
        }

    }, {
        './toBeArrayOfObjects': 18,
        './toBeObject': 41
    }],
    55: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeArrayOfSize = require('./toBeArrayOfSize');

        module.exports = toHaveArrayOfSize;

        function toHaveArrayOfSize(key, size, actual) {
            return toBeObject(actual) &&
                toBeArrayOfSize(size, actual[key]);
        }

    }, {
        './toBeArrayOfSize': 19,
        './toBeObject': 41
    }],
    56: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeArrayOfStrings = require('./toBeArrayOfStrings');

        module.exports = toHaveArrayOfStrings;

        function toHaveArrayOfStrings(key, actual) {
            return toBeObject(actual) &&
                toBeArrayOfStrings(actual[key]);
        }

    }, {
        './toBeArrayOfStrings': 20,
        './toBeObject': 41
    }],
    57: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeBoolean = require('./toBeBoolean');

        module.exports = toHaveBoolean;

        function toHaveBoolean(key, actual) {
            return toBeObject(actual) &&
                toBeBoolean(actual[key]);
        }

    }, {
        './toBeBoolean': 22,
        './toBeObject': 41
    }],
    58: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeCalculable = require('./toBeCalculable');

        module.exports = toHaveCalculable;

        function toHaveCalculable(key, actual) {
            return toBeObject(actual) &&
                toBeCalculable(actual[key]);
        }

    }, {
        './toBeCalculable': 23,
        './toBeObject': 41
    }],
    59: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeDate = require('./toBeDate');

        module.exports = toHaveDate;

        function toHaveDate(key, actual) {
            return toBeObject(actual) &&
                toBeDate(actual[key]);
        }

    }, {
        './toBeDate': 24,
        './toBeObject': 41
    }],
    60: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeAfter = require('./toBeAfter');

        module.exports = toHaveDateAfter;

        function toHaveDateAfter(key, date, actual) {
            return toBeObject(actual) &&
                toBeAfter(date, actual[key]);
        }

    }, {
        './toBeAfter': 14,
        './toBeObject': 41
    }],
    61: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeBefore = require('./toBeBefore');

        module.exports = toHaveDateBefore;

        function toHaveDateBefore(key, date, actual) {
            return toBeObject(actual) &&
                toBeBefore(date, actual[key]);
        }

    }, {
        './toBeBefore': 21,
        './toBeObject': 41
    }],
    62: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeEmptyArray = require('./toBeEmptyArray');

        module.exports = toHaveEmptyArray;

        function toHaveEmptyArray(key, actual) {
            return toBeObject(actual) &&
                toBeEmptyArray(actual[key]);
        }

    }, {
        './toBeEmptyArray': 25,
        './toBeObject': 41
    }],
    63: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeEmptyObject = require('./toBeEmptyObject');

        module.exports = toHaveEmptyObject;

        function toHaveEmptyObject(key, actual) {
            return toBeObject(actual) &&
                toBeEmptyObject(actual[key]);
        }

    }, {
        './toBeEmptyObject': 26,
        './toBeObject': 41
    }],
    64: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeEmptyString = require('./toBeEmptyString');

        module.exports = toHaveEmptyString;

        function toHaveEmptyString(key, actual) {
            return toBeObject(actual) &&
                toBeEmptyString(actual[key]);
        }

    }, {
        './toBeEmptyString': 27,
        './toBeObject': 41
    }],
    65: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeEvenNumber = require('./toBeEvenNumber');

        module.exports = toHaveEvenNumber;

        function toHaveEvenNumber(key, actual) {
            return toBeObject(actual) &&
                toBeEvenNumber(actual[key]);
        }

    }, {
        './toBeEvenNumber': 28,
        './toBeObject': 41
    }],
    66: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeFalse = require('./toBeFalse');

        module.exports = toHaveFalse;

        function toHaveFalse(key, actual) {
            return toBeObject(actual) &&
                toBeFalse(actual[key]);
        }

    }, {
        './toBeFalse': 29,
        './toBeObject': 41
    }],
    67: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeHtmlString = require('./toBeHtmlString');

        module.exports = toHaveHtmlString;

        function toHaveHtmlString(key, actual) {
            return toBeObject(actual) &&
                toBeHtmlString(actual[key]);
        }

    }, {
        './toBeHtmlString': 32,
        './toBeObject': 41
    }],
    68: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeIso8601 = require('./toBeIso8601');

        module.exports = toHaveIso8601;

        function toHaveIso8601(key, actual) {
            return toBeObject(actual) &&
                toBeIso8601(actual[key]);
        }

    }, {
        './toBeIso8601': 33,
        './toBeObject': 41
    }],
    69: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeJsonString = require('./toBeJsonString');

        module.exports = toHaveJsonString;

        function toHaveJsonString(key, actual) {
            return toBeObject(actual) &&
                toBeJsonString(actual[key]);
        }

    }, {
        './toBeJsonString': 34,
        './toBeObject': 41
    }],
    70: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeString = require('./toBeString');

        module.exports = toHaveMember;

        function toHaveMember(key, actual) {
            return toBeString(key) &&
                toBeObject(actual) &&
                key in actual;
        }

    }, {
        './toBeObject': 41,
        './toBeString': 45
    }],
    71: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeFunction = require('./toBeFunction');

        module.exports = toHaveMethod;

        function toHaveMethod(key, actual) {
            return toBeObject(actual) &&
                toBeFunction(actual[key]);
        }

    }, {
        './toBeFunction': 30,
        './toBeObject': 41
    }],
    72: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeNonEmptyArray = require('./toBeNonEmptyArray');

        module.exports = toHaveNonEmptyArray;

        function toHaveNonEmptyArray(key, actual) {
            return toBeObject(actual) &&
                toBeNonEmptyArray(actual[key]);
        }

    }, {
        './toBeNonEmptyArray': 37,
        './toBeObject': 41
    }],
    73: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeNonEmptyObject = require('./toBeNonEmptyObject');

        module.exports = toHaveNonEmptyObject;

        function toHaveNonEmptyObject(key, actual) {
            return toBeObject(actual) &&
                toBeNonEmptyObject(actual[key]);
        }

    }, {
        './toBeNonEmptyObject': 38,
        './toBeObject': 41
    }],
    74: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeNonEmptyString = require('./toBeNonEmptyString');

        module.exports = toHaveNonEmptyString;

        function toHaveNonEmptyString(key, actual) {
            return toBeObject(actual) &&
                toBeNonEmptyString(actual[key]);
        }

    }, {
        './toBeNonEmptyString': 39,
        './toBeObject': 41
    }],
    75: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeNumber = require('./toBeNumber');

        module.exports = toHaveNumber;

        function toHaveNumber(key, actual) {
            return toBeObject(actual) &&
                toBeNumber(actual[key]);
        }

    }, {
        './toBeNumber': 40,
        './toBeObject': 41
    }],
    76: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeWithinRange = require('./toBeWithinRange');

        module.exports = toHaveNumberWithinRange;

        function toHaveNumberWithinRange(key, floor, ceiling, actual) {
            return toBeObject(actual) &&
                toBeWithinRange(floor, ceiling, actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeWithinRange': 49
    }],
    77: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');

        module.exports = toHaveObject;

        function toHaveObject(key, actual) {
            return toBeObject(actual) &&
                toBeObject(actual[key]);
        }

    }, {
        './toBeObject': 41
    }],
    78: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeOddNumber = require('./toBeOddNumber');

        module.exports = toHaveOddNumber;

        function toHaveOddNumber(key, actual) {
            return toBeObject(actual) &&
                toBeOddNumber(actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeOddNumber': 42
    }],
    79: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeString = require('./toBeString');

        module.exports = toHaveString;

        function toHaveString(key, actual) {
            return toBeObject(actual) &&
                toBeString(actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeString': 45
    }],
    80: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeLongerThan = require('./toBeLongerThan');

        module.exports = toHaveStringLongerThan;

        function toHaveStringLongerThan(key, other, actual) {
            return toBeObject(actual) &&
                toBeLongerThan(other, actual[key]);
        }

    }, {
        './toBeLongerThan': 36,
        './toBeObject': 41
    }],
    81: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeSameLengthAs = require('./toBeSameLengthAs');

        module.exports = toHaveStringSameLengthAs;

        function toHaveStringSameLengthAs(key, other, actual) {
            return toBeObject(actual) &&
                toBeSameLengthAs(other, actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeSameLengthAs': 43
    }],
    82: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeShorterThan = require('./toBeShorterThan');

        module.exports = toHaveStringShorterThan;

        function toHaveStringShorterThan(key, other, actual) {
            return toBeObject(actual) &&
                toBeShorterThan(other, actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeShorterThan': 44
    }],
    83: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeTrue = require('./toBeTrue');

        module.exports = toHaveTrue;

        function toHaveTrue(key, actual) {
            return toBeObject(actual) &&
                toBeTrue(actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeTrue': 46
    }],
    84: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeWhitespace = require('./toBeWhitespace');

        module.exports = toHaveWhitespaceString;

        function toHaveWhitespaceString(key, actual) {
            return toBeObject(actual) &&
                toBeWhitespace(actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeWhitespace': 47
    }],
    85: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toBeWholeNumber = require('./toBeWholeNumber');

        module.exports = toHaveWholeNumber;

        function toHaveWholeNumber(key, actual) {
            return toBeObject(actual) &&
                toBeWholeNumber(actual[key]);
        }

    }, {
        './toBeObject': 41,
        './toBeWholeNumber': 48
    }],
    86: [function(require, module, exports) {
        'use strict';

        var toBeObject = require('./toBeObject');
        var toHaveMember = require('./toHaveMember');

        module.exports = toImplement;

        function toImplement(api, actual) {
            return toBeObject(api) &&
                toBeObject(actual) &&
                featuresAll(api, actual);
        }

        function featuresAll(api, actual) {
            for (var key in api) {
                if (!toHaveMember(key, actual) || actual[key].constructor !== api[key]) {
                    return false;
                }
            }
            return true;
        }

    }, {
        './toBeObject': 41,
        './toHaveMember': 70
    }],
    87: [function(require, module, exports) {
        'use strict';

        var toBeNonEmptyString = require('./toBeNonEmptyString');

        module.exports = toStartWith;

        function toStartWith(subString, actual) {
            if (!toBeNonEmptyString(actual) || !toBeNonEmptyString(subString)) {
                return false;
            }
            return actual.slice(0, subString.length) === subString;
        }

    }, {
        './toBeNonEmptyString': 39
    }],
    88: [function(require, module, exports) {
        'use strict';

        module.exports = toThrowAnyError;

        function toThrowAnyError(actual) {
            var threwError = false;
            try {
                actual();
            } catch (e) {
                threwError = true;
            }
            return threwError;
        }

    }, {}],
    89: [function(require, module, exports) {
        'use strict';

        module.exports = toThrowErrorOfType;

        function toThrowErrorOfType(type, actual) {
            var threwErrorOfType = false;
            try {
                actual();
            } catch (e) {
                threwErrorOfType = (e.name === type);
            }
            return threwErrorOfType;
        }

    }, {}]
}, {}, [9]);
