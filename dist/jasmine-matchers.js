(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// modules
var createRegister = require('./src/createRegister');
var jasmineV1 = require('./src/jasmine-v1');
var jasmineV2 = require('./src/jasmine-v2');
var jest = require('./src/jest');

// public
module.exports = createRegister({
  jasmineV1: jasmineV1,
  jasmineV2: jasmineV2,
  jest: jest
}, global);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/createRegister":2,"./src/jasmine-v1":3,"./src/jasmine-v2":4,"./src/jest":7}],2:[function(require,module,exports){
// public
module.exports = createRegister;

// implementation
function createRegister(frameworks, globals) {
  var adaptersByNumberOfArgs;

  if (globals.expect && globals.expect.extend) {
    adaptersByNumberOfArgs = frameworks.jest.getAdapters(globals);
  } else if (globals.jasmine && globals.jasmine.addMatchers) {
    adaptersByNumberOfArgs = frameworks.jasmineV2.getAdapters(globals);
  } else if (globals.jasmine) {
    adaptersByNumberOfArgs = frameworks.jasmineV1.getAdapters(globals);
  } else {
    throw new Error('jasmine-expect cannot find jest, jasmine v2.x, or jasmine v1.x');
  }

  return function (matchersByName) {
    for (var name in matchersByName) {
      var matcherFunction = matchersByName[name];
      var numberOfArgs = matcherFunction.length;
      var adapter = adaptersByNumberOfArgs[numberOfArgs];
      adapter(name, matcherFunction);
    }
  };
}

},{}],3:[function(require,module,exports){
module.exports = {
  getAdapters: function (globals) {
    return {
      1: createFactory(adapterForActual),
      2: createFactory(adapterForActualAndExpected),
      3: createFactory(adapterForActualAndTwoExpected),
      4: createFactory(adapterForKeyAndActualAndTwoExpected)
    };

    function createFactory(adapter) {
      return function (name, matcher) {
        var matchersByName = {};
        matchersByName[name] = adapter(name, matcher);
        globals.beforeEach(function () {
          this.addMatchers(matchersByName);
        });
        return matchersByName;
      };
    }

    function adapterForActual(name, matcher) {
      return function (optionalMessage) {
        return matcher(this.actual, optionalMessage);
      };
    }

    function adapterForActualAndExpected(name, matcher) {
      return function (expected, optionalMessage) {
        return matcher(expected, this.actual, optionalMessage);
      };
    }

    function adapterForActualAndTwoExpected(name, matcher) {
      return function (expected1, expected2, optionalMessage) {
        return matcher(expected1, expected2, this.actual, optionalMessage);
      };
    }

    function adapterForKeyAndActualAndTwoExpected(name, matcher) {
      return function (key, expected1, expected2, optionalMessage) {
        return matcher(key, expected1, expected2, this.actual, optionalMessage);
      };
    }
  }
};

},{}],4:[function(require,module,exports){
var matcherFactory = require('./matcherFactory');
var memberMatcherFactory = require('./memberMatcherFactory');

module.exports = {
  getAdapters: function (globals) {
    return {
      1: createFactory(getAdapter(1)),
      2: createFactory(getAdapter(2)),
      3: createFactory(getAdapter(3)),
      4: createFactory(getAdapter(4))
    };

    function createFactory(adapter) {
      return function (name, matcher) {
        var matchersByName = {};
        matchersByName[name] = adapter(name, matcher);
        globals.beforeEach(function () {
          globals.jasmine.addMatchers(matchersByName);
        });
        return matchersByName;
      };
    }

    function getAdapter(argsCount) {
      return function (name, matcher) {
        var factory = isMemberMatcher(name) ? memberMatcherFactory : matcherFactory;
        return factory[argsCount](name, matcher);
      };
    }

    function isMemberMatcher(name) {
      return name.search(/^toHave/) !== -1;
    }
  }
};

},{"./matcherFactory":5,"./memberMatcherFactory":6}],5:[function(require,module,exports){
module.exports = {
  1: forActual,
  2: forActualAndExpected,
  3: forActualAndTwoExpected
};

function forActual(name, matcher) {
  return function (util) {
    return {
      compare: function (actual, optionalMessage) {
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
  return function (util) {
    return {
      compare: function (actual, expected, optionalMessage) {
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
  return function (util) {
    return {
      compare: function (actual, expected1, expected2, optionalMessage) {
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

},{}],6:[function(require,module,exports){
module.exports = {
  2: forKeyAndActual,
  3: forKeyAndActualAndExpected,
  4: forKeyAndActualAndTwoExpected
};

function forKeyAndActual(name, matcher) {
  return function (util) {
    return {
      compare: function (actual, key, optionalMessage) {
        var passes = matcher(key, actual);
        return {
          pass: passes,
          message: util.buildFailureMessage(name, passes, actual, optionalMessage || key)
        };
      }
    };
  };
}

function forKeyAndActualAndExpected(name, matcher) {
  return function (util) {
    return {
      compare: function (actual, key, expected, optionalMessage) {
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
  return function (util) {
    return {
      compare: function (actual, key, expected1, expected2, optionalMessage) {
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

},{}],7:[function(require,module,exports){
var matcherFactory = require('./matcherFactory');
var memberMatcherFactory = require('./memberMatcherFactory');

module.exports = {
  getAdapters: function (globals) {
    return {
      1: createFactory(getAdapter(1)),
      2: createFactory(getAdapter(2)),
      3: createFactory(getAdapter(3)),
      4: createFactory(getAdapter(4))
    };

    function createFactory(adapter) {
      return function (name, matcher) {
        var matchersByName = {};
        matchersByName[name] = adapter(name, matcher);
        globals.expect.extend(matchersByName);
        return matchersByName;
      };
    }

    function getAdapter(argsCount) {
      return function (name, matcher) {
        var factory = isMemberMatcher(name) ? memberMatcherFactory : matcherFactory;
        return factory[argsCount](name, matcher);
      };
    }

    function isMemberMatcher(name) {
      return name.search(/^toHave/) !== -1;
    }
  }
};

},{"./matcherFactory":8,"./memberMatcherFactory":9}],8:[function(require,module,exports){
module.exports = {
  1: adapterForActual,
  2: adapterForActualAndExpected,
  3: adapterForActualAndTwoExpected
};

function adapterForActual(name, matcher) {
  return function (received) {
    var pass = matcher(received);
    var infix = pass ? ' not ' : ' ';
    var message = 'expected ' + this.utils.printReceived(received) + infix + getLongName(name);
    return {
      message: function () {
        return message;
      },
      pass: pass
    };
  };
}

function adapterForActualAndExpected(name, matcher) {
  return function (received, expected) {
    var pass = matcher(expected, received);
    var infix = pass ? ' not ' : ' ';
    var message = 'expected ' + this.utils.printReceived(received) + infix + getLongName(name) + ' ' + this.utils.printExpected(expected);
    return {
      message: function () {
        return message;
      },
      pass: pass
    };
  };
}

function adapterForActualAndTwoExpected(name, matcher) {
  return function (received, expected1, expected2) {
    var pass = matcher(expected1, expected2, received);
    var infix = pass ? ' not ' : ' ';
    var message = 'expected ' + this.utils.printReceived(received) + infix + getLongName(name) + ' ' + this.utils.printExpected(expected1) + ', ' + this.utils.printExpected(expected2);
    return {
      message: function () {
        return message;
      },
      pass: pass
    };
  };
}

function getLongName(name) {
  return name.replace(/\B([A-Z])/g, ' $1').toLowerCase();
}

},{}],9:[function(require,module,exports){
module.exports = {
  2: forKeyAndActual,
  3: forKeyAndActualAndExpected,
  4: forKeyAndActualAndTwoExpected
};

function forKeyAndActual(name, matcher) {
  return function (received, key) {
    var pass = matcher(key, received);
    var infix = pass ? ' not ' : ' ';
    var message = 'expected member "' + key + '" of ' + this.utils.printReceived(received) + infix + getLongName(name);
    return {
      message: function () {
        return message;
      },
      pass: pass
    };
  };
}

function forKeyAndActualAndExpected(name, matcher) {
  return function (received, key, expected) {
    var pass = matcher(key, expected, received);
    var infix = pass ? ' not ' : ' ';
    var message = 'expected member "' + key + '" of ' + this.utils.printReceived(received) + infix + getLongName(name) + ' ' + this.utils.printExpected(expected);
    return {
      message: function () {
        return message;
      },
      pass: pass
    };
  };
}

function forKeyAndActualAndTwoExpected(name, matcher) {
  return function (received, key, expected1, expected2) {
    var pass = matcher(key, expected1, expected2, received);
    var infix = pass ? ' not ' : ' ';
    var message = 'expected member "' + key + '" of ' + this.utils.printReceived(received) + infix + getLongName(name) + ' ' + this.utils.printExpected(expected1) + ', ' + this.utils.printExpected(expected2);
    return {
      message: function () {
        return message;
      },
      pass: pass
    };
  };
}

function getLongName(name) {
  return name.replace(/\B([A-Z])/g, ' $1').toLowerCase();
}

},{}],10:[function(require,module,exports){
'use strict';

// public
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
    name: 'regExp',
    matcher: 'toBeRegExp'
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
    toBeNear: require('./toBeNear'),
    toBeNonEmptyArray: require('./toBeNonEmptyArray'),
    toBeNonEmptyObject: require('./toBeNonEmptyObject'),
    toBeNonEmptyString: require('./toBeNonEmptyString'),
    toBeNumber: require('./toBeNumber'),
    toBeObject: require('./toBeObject'),
    toBeOddNumber: require('./toBeOddNumber'),
    toBeRegExp: require('./toBeRegExp'),
    toBeSameLengthAs: require('./toBeSameLengthAs'),
    toBeShorterThan: require('./toBeShorterThan'),
    toBeString: require('./toBeString'),
    toBeTrue: require('./toBeTrue'),
    toBeValidDate: require('./toBeValidDate'),
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
    toHaveUndefined: require('./toHaveUndefined'),
    toHaveWhitespaceString: require('./toHaveWhitespaceString'),
    toHaveWholeNumber: require('./toHaveWholeNumber'),
    toStartWith: require('./toStartWith'),
    toThrowAnyError: require('./toThrowAnyError'),
    toThrowErrorOfType: require('./toThrowErrorOfType')
  }
};

},{"./toBeAfter":18,"./toBeArray":19,"./toBeArrayOfBooleans":20,"./toBeArrayOfNumbers":21,"./toBeArrayOfObjects":22,"./toBeArrayOfSize":23,"./toBeArrayOfStrings":24,"./toBeBefore":25,"./toBeBoolean":26,"./toBeCalculable":27,"./toBeDate":28,"./toBeEmptyArray":29,"./toBeEmptyObject":30,"./toBeEmptyString":31,"./toBeEvenNumber":32,"./toBeFalse":33,"./toBeFunction":34,"./toBeGreaterThanOrEqualTo":35,"./toBeHtmlString":36,"./toBeIso8601":37,"./toBeJsonString":38,"./toBeLessThanOrEqualTo":39,"./toBeLongerThan":40,"./toBeNear":41,"./toBeNonEmptyArray":42,"./toBeNonEmptyObject":43,"./toBeNonEmptyString":44,"./toBeNumber":45,"./toBeObject":46,"./toBeOddNumber":47,"./toBeRegExp":48,"./toBeSameLengthAs":49,"./toBeShorterThan":50,"./toBeString":51,"./toBeTrue":52,"./toBeValidDate":53,"./toBeWhitespace":54,"./toBeWholeNumber":55,"./toBeWithinRange":56,"./toEndWith":57,"./toHaveArray":58,"./toHaveArrayOfBooleans":59,"./toHaveArrayOfNumbers":60,"./toHaveArrayOfObjects":61,"./toHaveArrayOfSize":62,"./toHaveArrayOfStrings":63,"./toHaveBoolean":64,"./toHaveCalculable":65,"./toHaveDate":66,"./toHaveDateAfter":67,"./toHaveDateBefore":68,"./toHaveEmptyArray":69,"./toHaveEmptyObject":70,"./toHaveEmptyString":71,"./toHaveEvenNumber":72,"./toHaveFalse":73,"./toHaveHtmlString":74,"./toHaveIso8601":75,"./toHaveJsonString":76,"./toHaveMember":77,"./toHaveMethod":78,"./toHaveNonEmptyArray":79,"./toHaveNonEmptyObject":80,"./toHaveNonEmptyString":81,"./toHaveNumber":82,"./toHaveNumberWithinRange":83,"./toHaveObject":84,"./toHaveOddNumber":85,"./toHaveString":86,"./toHaveStringLongerThan":87,"./toHaveStringSameLengthAs":88,"./toHaveStringShorterThan":89,"./toHaveTrue":90,"./toHaveUndefined":91,"./toHaveWhitespaceString":92,"./toHaveWholeNumber":93,"./toStartWith":94,"./toThrowAnyError":95,"./toThrowErrorOfType":96}],11:[function(require,module,exports){
'use strict';

// modules
var reduce = require('./lib/reduce');
var api = require('./api');

// public
module.exports = reduce(api.asymmetricMatcher, register, {});

// implementation
function register(any, asymMatcher) {
  var matcher = api.matcher[asymMatcher.matcher];
  any[asymMatcher.name] = createFactory(matcher);
  return any;
}

function createFactory(matcher) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      asymmetricMatch: function asymmetricMatch(actual) {
        var clone = args.slice();
        clone.push(actual);
        return matcher.apply(this, clone);
      }
    };
  };
}

},{"./api":10,"./lib/reduce":17}],12:[function(require,module,exports){
(function (global){
'use strict';

// 3rd party modules
var addMatchers = require('add-matchers');

// modules
var api = require('./api');
var asymmetricMatchers = require('./asymmetricMatchers');

// public
module.exports = api.matcher;

// implementation
addMatchers(api.matcher);
global.any = asymmetricMatchers;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./api":10,"./asymmetricMatchers":11,"add-matchers":1}],13:[function(require,module,exports){
"use strict";

// public
module.exports = function (array, truthTest) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (!truthTest(array[i])) {
      return false;
    }
  }
  return true;
};

},{}],14:[function(require,module,exports){
'use strict';

// public
module.exports = {
  Array: is('Array'),
  Boolean: is('Boolean'),
  Date: is('Date'),
  False: isBooleanObject(false),
  Function: is('Function'),
  Object: is('Object'),
  String: is('String'),
  True: isBooleanObject(true)
};

// implementation
function is(type) {
  return function (value) {
    return Object.prototype.toString.call(value) === '[object ' + type + ']';
  };
}

function isBooleanObject(trueOrFalse) {
  return function (value) {
    return module.exports.Boolean(value) && value.valueOf() === trueOrFalse;
  };
}

},{}],15:[function(require,module,exports){
'use strict';

// modules
var reduce = require('./reduce');

// public
module.exports = function (object) {
  return reduce(object, function (keys, value, key) {
    return keys.concat(key);
  }, []);
};

},{"./reduce":17}],16:[function(require,module,exports){
'use strict';

// modules
var is = require('./is');

// public
module.exports = function (toBeX) {
  return function (key, actual) {
    return is.Object(actual) && toBeX(actual[key]);
  };
};

},{"./is":14}],17:[function(require,module,exports){
'use strict';

// modules
var is = require('./is');

// public
module.exports = function (collection, fn, memo) {
  if (is.Array(collection)) {
    for (var i = 0, len = collection.length; i < len; i++) {
      memo = fn(memo, collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      if ({}.hasOwnProperty.call(collection, key)) {
        memo = fn(memo, collection[key], key, collection);
      }
    }
  }
  return memo;
};

},{"./is":14}],18:[function(require,module,exports){
'use strict';

// modules
var toBeBefore = require('./toBeBefore');

// public
module.exports = function (otherDate, actual) {
  return toBeBefore(actual, otherDate);
};

},{"./toBeBefore":25}],19:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = is.Array;

},{"./lib/is":14}],20:[function(require,module,exports){
'use strict';

// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeBoolean = require('./toBeBoolean');

// public
module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeBoolean);
};

},{"./lib/every":13,"./toBeArray":19,"./toBeBoolean":26}],21:[function(require,module,exports){
'use strict';

// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeNumber);
};

},{"./lib/every":13,"./toBeArray":19,"./toBeNumber":45}],22:[function(require,module,exports){
'use strict';

// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeObject = require('./toBeObject');

// public
module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeObject);
};

},{"./lib/every":13,"./toBeArray":19,"./toBeObject":46}],23:[function(require,module,exports){
'use strict';

// modules
var toBeArray = require('./toBeArray');

// public
module.exports = function (size, actual) {
  return toBeArray(actual) && actual.length === size;
};

},{"./toBeArray":19}],24:[function(require,module,exports){
'use strict';

// modules
var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeString = require('./toBeString');

// public
module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeString);
};

},{"./lib/every":13,"./toBeArray":19,"./toBeString":51}],25:[function(require,module,exports){
'use strict';

// modules
var toBeDate = require('./toBeDate');

// public
module.exports = function (otherDate, actual) {
  return toBeDate(actual) && toBeDate(otherDate) && actual.getTime() < otherDate.getTime();
};

},{"./toBeDate":28}],26:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = is.Boolean;

},{"./lib/is":14}],27:[function(require,module,exports){
"use strict";

// public
module.exports = toBeCalculable;

// Assert subject can be used in Mathemetic calculations despite not being a
// Number, for example `"1" * "2" === 2` whereas `"wut?" * 2 === NaN`.
function toBeCalculable(actual) {
  return !isNaN(actual * 2);
}

},{}],28:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = is.Date;

},{"./lib/is":14}],29:[function(require,module,exports){
'use strict';

// modules
var toBeArrayOfSize = require('./toBeArrayOfSize');

// public
module.exports = function (actual) {
  return toBeArrayOfSize(0, actual);
};

},{"./toBeArrayOfSize":23}],30:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');
var keys = require('./lib/keys');

// public
module.exports = function (actual) {
  return is.Object(actual) && keys(actual).length === 0;
};

},{"./lib/is":14,"./lib/keys":15}],31:[function(require,module,exports){
'use strict';

// public
module.exports = function (actual) {
  return actual === '';
};

},{}],32:[function(require,module,exports){
'use strict';

// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (actual) {
  return toBeNumber(actual) && actual % 2 === 0;
};

},{"./toBeNumber":45}],33:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = function (actual) {
  return actual === false || is.False(actual);
}; // eslint-disable-line new-cap

},{"./lib/is":14}],34:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = is.Function;

},{"./lib/is":14}],35:[function(require,module,exports){
'use strict';

// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (otherNumber, actual) {
  return toBeNumber(actual) && actual >= otherNumber;
};

},{"./toBeNumber":45}],36:[function(require,module,exports){
'use strict';

// modules
var toBeString = require('./toBeString');

// public
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
module.exports = function (actual) {
  return toBeString(actual) && actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
};

},{"./toBeString":51}],37:[function(require,module,exports){
'use strict';

// modules
var toBeString = require('./toBeString');
var toBeValidDate = require('./toBeValidDate');

// public
module.exports = function (actual) {
  return toBeString(actual) && (isMatch('1999-12-31', actual) || isMatch('1999-12-31T23:59', actual) || isMatch('1999-12-31T23:59:59', actual) || isMatch('1999-12-31T23:59:59.000', actual) || isMatch('1999-12-31T23:59:59.000Z', actual)) && toBeValidDate(new Date(actual));
};

// implementation
function isMatch(pattern, actual) {
  var patterns = {
    '1999-12-31': /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/,
    '1999-12-31T23:59': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})$/,
    '1999-12-31T23:59:59': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})$/,
    '1999-12-31T23:59:59.000': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})$/,
    '1999-12-31T23:59:59.000Z': /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})Z$/
  };
  return actual.search(patterns[pattern]) !== -1;
}

},{"./toBeString":51,"./toBeValidDate":53}],38:[function(require,module,exports){
"use strict";

// public
module.exports = function (actual) {
  try {
    return JSON.parse(actual) !== null;
  } catch (err) {
    return false;
  }
};

},{}],39:[function(require,module,exports){
'use strict';

// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (otherNumber, actual) {
  return toBeNumber(actual) && actual <= otherNumber;
};

},{"./toBeNumber":45}],40:[function(require,module,exports){
'use strict';

// modules
var toBeString = require('./toBeString');

// public
module.exports = function (otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length > otherString.length;
};

},{"./toBeString":51}],41:[function(require,module,exports){
'use strict';

// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (number, epsilon, actual) {
  return toBeNumber(actual) && actual >= number - epsilon && actual <= number + epsilon;
};

},{"./toBeNumber":45}],42:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = function (actual) {
  return is.Array(actual) && actual.length > 0;
};

},{"./lib/is":14}],43:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');
var keys = require('./lib/keys');

// public
module.exports = function (actual) {
  return is.Object(actual) && keys(actual).length > 0;
};

},{"./lib/is":14,"./lib/keys":15}],44:[function(require,module,exports){
'use strict';

// modules
var toBeString = require('./toBeString');

// public
module.exports = function (actual) {
  return toBeString(actual) && actual.length > 0;
};

},{"./toBeString":51}],45:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = function (actual) {
  return !isNaN(parseFloat(actual)) && !is.String(actual);
};

},{"./lib/is":14}],46:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = is.Object;

},{"./lib/is":14}],47:[function(require,module,exports){
'use strict';

// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (actual) {
  return toBeNumber(actual) && actual % 2 !== 0;
};

},{"./toBeNumber":45}],48:[function(require,module,exports){
"use strict";

// public
module.exports = function (actual) {
  return actual instanceof RegExp;
};

},{}],49:[function(require,module,exports){
'use strict';

// modules
var toBeString = require('./toBeString');

// public
module.exports = function (otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length === otherString.length;
};

},{"./toBeString":51}],50:[function(require,module,exports){
'use strict';

// modules
var toBeString = require('./toBeString');

// public
module.exports = function (otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length < otherString.length;
};

},{"./toBeString":51}],51:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = is.String;

},{"./lib/is":14}],52:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = function (actual) {
  return actual === true || is.True(actual);
}; // eslint-disable-line new-cap

},{"./lib/is":14}],53:[function(require,module,exports){
'use strict';

// modules
var is = require('./lib/is');

// public
module.exports = function (actual) {
  return is.Date(actual) && !isNaN(actual.getTime());
};

},{"./lib/is":14}],54:[function(require,module,exports){
'use strict';

// modules
var toBeString = require('./toBeString');

// public
module.exports = function (actual) {
  return toBeString(actual) && actual.search(/\S/) === -1;
};

},{"./toBeString":51}],55:[function(require,module,exports){
'use strict';

// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (actual) {
  return toBeNumber(actual) && (actual === 0 || actual % 1 === 0);
};

},{"./toBeNumber":45}],56:[function(require,module,exports){
'use strict';

// modules
var toBeNumber = require('./toBeNumber');

// public
module.exports = function (floor, ceiling, actual) {
  return toBeNumber(actual) && actual >= floor && actual <= ceiling;
};

},{"./toBeNumber":45}],57:[function(require,module,exports){
'use strict';

// modules
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = function (subString, actual) {
  return toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.slice(actual.length - subString.length, actual.length) === subString;
};

},{"./toBeNonEmptyString":44}],58:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArray = require('./toBeArray');

// public
module.exports = memberMatcherFor(toBeArray);

},{"./lib/memberMatcherFor":16,"./toBeArray":19}],59:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

// public
module.exports = memberMatcherFor(toBeArrayOfBooleans);

},{"./lib/memberMatcherFor":16,"./toBeArrayOfBooleans":20}],60:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

// public
module.exports = memberMatcherFor(toBeArrayOfNumbers);

},{"./lib/memberMatcherFor":16,"./toBeArrayOfNumbers":21}],61:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfObjects = require('./toBeArrayOfObjects');

// public
module.exports = memberMatcherFor(toBeArrayOfObjects);

},{"./lib/memberMatcherFor":16,"./toBeArrayOfObjects":22}],62:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeArrayOfSize = require('./toBeArrayOfSize');

// public
module.exports = function (key, size, actual) {
  return toBeObject(actual) && toBeArrayOfSize(size, actual[key]);
};

},{"./toBeArrayOfSize":23,"./toBeObject":46}],63:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfStrings = require('./toBeArrayOfStrings');

// public
module.exports = memberMatcherFor(toBeArrayOfStrings);

},{"./lib/memberMatcherFor":16,"./toBeArrayOfStrings":24}],64:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeBoolean = require('./toBeBoolean');

// public
module.exports = memberMatcherFor(toBeBoolean);

},{"./lib/memberMatcherFor":16,"./toBeBoolean":26}],65:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeCalculable = require('./toBeCalculable');

// public
module.exports = memberMatcherFor(toBeCalculable);

},{"./lib/memberMatcherFor":16,"./toBeCalculable":27}],66:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeDate = require('./toBeDate');

// public
module.exports = memberMatcherFor(toBeDate);

},{"./lib/memberMatcherFor":16,"./toBeDate":28}],67:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeAfter = require('./toBeAfter');

// public
module.exports = function (key, date, actual) {
  return toBeObject(actual) && toBeAfter(date, actual[key]);
};

},{"./toBeAfter":18,"./toBeObject":46}],68:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeBefore = require('./toBeBefore');

// public
module.exports = function (key, date, actual) {
  return toBeObject(actual) && toBeBefore(date, actual[key]);
};

},{"./toBeBefore":25,"./toBeObject":46}],69:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEmptyArray = require('./toBeEmptyArray');

// public
module.exports = memberMatcherFor(toBeEmptyArray);

},{"./lib/memberMatcherFor":16,"./toBeEmptyArray":29}],70:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEmptyObject = require('./toBeEmptyObject');

// public
module.exports = memberMatcherFor(toBeEmptyObject);

},{"./lib/memberMatcherFor":16,"./toBeEmptyObject":30}],71:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEmptyString = require('./toBeEmptyString');

// public
module.exports = memberMatcherFor(toBeEmptyString);

},{"./lib/memberMatcherFor":16,"./toBeEmptyString":31}],72:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEvenNumber = require('./toBeEvenNumber');

// public
module.exports = memberMatcherFor(toBeEvenNumber);

},{"./lib/memberMatcherFor":16,"./toBeEvenNumber":32}],73:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeFalse = require('./toBeFalse');

// public
module.exports = memberMatcherFor(toBeFalse);

},{"./lib/memberMatcherFor":16,"./toBeFalse":33}],74:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeHtmlString = require('./toBeHtmlString');

// public
module.exports = memberMatcherFor(toBeHtmlString);

},{"./lib/memberMatcherFor":16,"./toBeHtmlString":36}],75:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeIso8601 = require('./toBeIso8601');

// public
module.exports = memberMatcherFor(toBeIso8601);

},{"./lib/memberMatcherFor":16,"./toBeIso8601":37}],76:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeJsonString = require('./toBeJsonString');

// public
module.exports = memberMatcherFor(toBeJsonString);

},{"./lib/memberMatcherFor":16,"./toBeJsonString":38}],77:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

// public
module.exports = function (key, actual) {
  return toBeString(key) && toBeObject(actual) && key in actual;
};

},{"./toBeObject":46,"./toBeString":51}],78:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeFunction = require('./toBeFunction');

// public
module.exports = memberMatcherFor(toBeFunction);

},{"./lib/memberMatcherFor":16,"./toBeFunction":34}],79:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNonEmptyArray = require('./toBeNonEmptyArray');

// public
module.exports = memberMatcherFor(toBeNonEmptyArray);

},{"./lib/memberMatcherFor":16,"./toBeNonEmptyArray":42}],80:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNonEmptyObject = require('./toBeNonEmptyObject');

// public
module.exports = memberMatcherFor(toBeNonEmptyObject);

},{"./lib/memberMatcherFor":16,"./toBeNonEmptyObject":43}],81:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = memberMatcherFor(toBeNonEmptyString);

},{"./lib/memberMatcherFor":16,"./toBeNonEmptyString":44}],82:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNumber = require('./toBeNumber');

// public
module.exports = memberMatcherFor(toBeNumber);

},{"./lib/memberMatcherFor":16,"./toBeNumber":45}],83:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeWithinRange = require('./toBeWithinRange');

// public
module.exports = function (key, floor, ceiling, actual) {
  return toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
};

},{"./toBeObject":46,"./toBeWithinRange":56}],84:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeObject = require('./toBeObject');

// public
module.exports = memberMatcherFor(toBeObject);

},{"./lib/memberMatcherFor":16,"./toBeObject":46}],85:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeOddNumber = require('./toBeOddNumber');

// public
module.exports = memberMatcherFor(toBeOddNumber);

},{"./lib/memberMatcherFor":16,"./toBeOddNumber":47}],86:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeString = require('./toBeString');

// public
module.exports = memberMatcherFor(toBeString);

},{"./lib/memberMatcherFor":16,"./toBeString":51}],87:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeLongerThan = require('./toBeLongerThan');

// public
module.exports = function (key, other, actual) {
  return toBeObject(actual) && toBeLongerThan(other, actual[key]);
};

},{"./toBeLongerThan":40,"./toBeObject":46}],88:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeSameLengthAs = require('./toBeSameLengthAs');

// public
module.exports = function (key, other, actual) {
  return toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
};

},{"./toBeObject":46,"./toBeSameLengthAs":49}],89:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toBeShorterThan = require('./toBeShorterThan');

// public
module.exports = function (key, other, actual) {
  return toBeObject(actual) && toBeShorterThan(other, actual[key]);
};

},{"./toBeObject":46,"./toBeShorterThan":50}],90:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeTrue = require('./toBeTrue');

// public
module.exports = memberMatcherFor(toBeTrue);

},{"./lib/memberMatcherFor":16,"./toBeTrue":52}],91:[function(require,module,exports){
'use strict';

// modules
var toBeObject = require('./toBeObject');
var toHaveMember = require('./toHaveMember');

// public
module.exports = function (key, actual) {
  return toBeObject(actual) && toHaveMember(key, actual) && typeof actual[key] === 'undefined';
};

},{"./toBeObject":46,"./toHaveMember":77}],92:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeWhitespace = require('./toBeWhitespace');

// public
module.exports = memberMatcherFor(toBeWhitespace);

},{"./lib/memberMatcherFor":16,"./toBeWhitespace":54}],93:[function(require,module,exports){
'use strict';

// modules
var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeWholeNumber = require('./toBeWholeNumber');

// public
module.exports = memberMatcherFor(toBeWholeNumber);

},{"./lib/memberMatcherFor":16,"./toBeWholeNumber":55}],94:[function(require,module,exports){
'use strict';

// modules
var toBeNonEmptyString = require('./toBeNonEmptyString');

// public
module.exports = function (subString, actual) {
  return toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.slice(0, subString.length) === subString;
};

},{"./toBeNonEmptyString":44}],95:[function(require,module,exports){
"use strict";

// public
module.exports = function (actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};

},{}],96:[function(require,module,exports){
"use strict";

// public
module.exports = function (type, actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return err.name === type;
  }
};

},{}]},{},[12]);
