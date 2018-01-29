(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
// modules
var createRegister = require('./src/create-register');
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
},{"./src/create-register":3,"./src/jasmine-v1":4,"./src/jasmine-v2":5,"./src/jest":8}],2:[function(require,module,exports){
(function (global){
// public
module.exports = addAsymmetricMatchers;

// implementation
function addAsymmetricMatchers(matchersByName) {
  /* eslint guard-for-in: 0 */
  global.any = global.any || {};
  for (var name in matchersByName) {
    addAsymmetricMatcher(name, matchersByName[name]);
  }
}

function addAsymmetricMatcher(name, matcher) {
  global.any[name] = function () {
    var args = [].slice.call(arguments);
    return {
      asymmetricMatch: function (actual) {
        var clone = args.slice();
        clone.push(actual);
        return matcher.apply(this, clone);
      }
    };
  };
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
// modules
var addAsymmetricMatchers = require('./add-asymmetric-matchers');

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

  addMatchers.asymmetric = addAsymmetricMatchers;

  return addMatchers;

  function addMatchers(matchersByName) {
    /* eslint guard-for-in: 0 */
    for (var name in matchersByName) {
      var matcherFunction = matchersByName[name];
      var numberOfArgs = matcherFunction.length;
      var adapter = adaptersByNumberOfArgs[numberOfArgs];
      adapter(name, matcherFunction);
    }
  }
}

},{"./add-asymmetric-matchers":2}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
var matcherFactory = require('./matcher-factory');
var memberMatcherFactory = require('./member-matcher-factory');

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

},{"./matcher-factory":6,"./member-matcher-factory":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
var matcherFactory = require('./matcher-factory');
var memberMatcherFactory = require('./member-matcher-factory');

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

},{"./matcher-factory":9,"./member-matcher-factory":10}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

var addMatchers = require('add-matchers');

var matchersByName = {
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
};

var asymmetricMatchersByName = {
  after: matchersByName.toBeAfter,
  arrayOfBooleans: matchersByName.toBeArrayOfBooleans,
  arrayOfNumbers: matchersByName.toBeArrayOfNumbers,
  arrayOfObjects: matchersByName.toBeArrayOfObjects,
  arrayOfSize: matchersByName.toBeArrayOfSize,
  arrayOfStrings: matchersByName.toBeArrayOfStrings,
  before: matchersByName.toBeBefore,
  calculable: matchersByName.toBeCalculable,
  emptyArray: matchersByName.toBeEmptyArray,
  emptyObject: matchersByName.toBeEmptyObject,
  evenNumber: matchersByName.toBeEvenNumber,
  greaterThanOrEqualTo: matchersByName.toBeGreaterThanOrEqualTo,
  iso8601: matchersByName.toBeIso8601,
  jsonString: matchersByName.toBeJsonString,
  lessThanOrEqualTo: matchersByName.toBeLessThanOrEqualTo,
  longerThan: matchersByName.toBeLongerThan,
  nonEmptyArray: matchersByName.toBeNonEmptyArray,
  nonEmptyObject: matchersByName.toBeNonEmptyObject,
  nonEmptyString: matchersByName.toBeNonEmptyString,
  oddNumber: matchersByName.toBeOddNumber,
  regExp: matchersByName.toBeRegExp,
  sameLengthAs: matchersByName.toBeSameLengthAs,
  shorterThan: matchersByName.toBeShorterThan,
  whitespace: matchersByName.toBeWhitespace,
  wholeNumber: matchersByName.toBeWholeNumber,
  withinRange: matchersByName.toBeWithinRange,
  endingWith: matchersByName.toEndWith,
  startingWith: matchersByName.toStartWith
};

addMatchers(matchersByName);
addMatchers.asymmetric(asymmetricMatchersByName);

module.exports = matchersByName;

},{"./toBeAfter":17,"./toBeArray":18,"./toBeArrayOfBooleans":19,"./toBeArrayOfNumbers":20,"./toBeArrayOfObjects":21,"./toBeArrayOfSize":22,"./toBeArrayOfStrings":23,"./toBeBefore":24,"./toBeBoolean":25,"./toBeCalculable":26,"./toBeDate":27,"./toBeEmptyArray":28,"./toBeEmptyObject":29,"./toBeEmptyString":30,"./toBeEvenNumber":31,"./toBeFalse":32,"./toBeFunction":33,"./toBeGreaterThanOrEqualTo":34,"./toBeHtmlString":35,"./toBeIso8601":36,"./toBeJsonString":37,"./toBeLessThanOrEqualTo":38,"./toBeLongerThan":39,"./toBeNear":40,"./toBeNonEmptyArray":41,"./toBeNonEmptyObject":42,"./toBeNonEmptyString":43,"./toBeNumber":44,"./toBeObject":45,"./toBeOddNumber":46,"./toBeRegExp":47,"./toBeSameLengthAs":48,"./toBeShorterThan":49,"./toBeString":50,"./toBeTrue":51,"./toBeValidDate":52,"./toBeWhitespace":53,"./toBeWholeNumber":54,"./toBeWithinRange":55,"./toEndWith":56,"./toHaveArray":57,"./toHaveArrayOfBooleans":58,"./toHaveArrayOfNumbers":59,"./toHaveArrayOfObjects":60,"./toHaveArrayOfSize":61,"./toHaveArrayOfStrings":62,"./toHaveBoolean":63,"./toHaveCalculable":64,"./toHaveDate":65,"./toHaveDateAfter":66,"./toHaveDateBefore":67,"./toHaveEmptyArray":68,"./toHaveEmptyObject":69,"./toHaveEmptyString":70,"./toHaveEvenNumber":71,"./toHaveFalse":72,"./toHaveHtmlString":73,"./toHaveIso8601":74,"./toHaveJsonString":75,"./toHaveMember":76,"./toHaveMethod":77,"./toHaveNonEmptyArray":78,"./toHaveNonEmptyObject":79,"./toHaveNonEmptyString":80,"./toHaveNumber":81,"./toHaveNumberWithinRange":82,"./toHaveObject":83,"./toHaveOddNumber":84,"./toHaveString":85,"./toHaveStringLongerThan":86,"./toHaveStringSameLengthAs":87,"./toHaveStringShorterThan":88,"./toHaveTrue":89,"./toHaveUndefined":90,"./toHaveWhitespaceString":91,"./toHaveWholeNumber":92,"./toStartWith":93,"./toThrowAnyError":94,"./toThrowErrorOfType":95,"add-matchers":1}],12:[function(require,module,exports){
"use strict";

module.exports = function (array, truthTest) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (!truthTest(array[i])) {
      return false;
    }
  }
  return true;
};

},{}],13:[function(require,module,exports){
'use strict';

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

},{}],14:[function(require,module,exports){
'use strict';

var reduce = require('./reduce');

module.exports = function (object) {
  return reduce(object, function (keys, value, key) {
    return keys.concat(key);
  }, []);
};

},{"./reduce":16}],15:[function(require,module,exports){
'use strict';

var is = require('./is');

module.exports = function (toBeX) {
  return function (key, actual) {
    return is.Object(actual) && toBeX(actual[key]);
  };
};

},{"./is":13}],16:[function(require,module,exports){
'use strict';

var is = require('./is');

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

},{"./is":13}],17:[function(require,module,exports){
'use strict';

var toBeBefore = require('./toBeBefore');

module.exports = function (otherDate, actual) {
  return toBeBefore(actual, otherDate);
};

},{"./toBeBefore":24}],18:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = is.Array;

},{"./lib/is":13}],19:[function(require,module,exports){
'use strict';

var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeBoolean = require('./toBeBoolean');

module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeBoolean);
};

},{"./lib/every":12,"./toBeArray":18,"./toBeBoolean":25}],20:[function(require,module,exports){
'use strict';

var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeNumber = require('./toBeNumber');

module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeNumber);
};

},{"./lib/every":12,"./toBeArray":18,"./toBeNumber":44}],21:[function(require,module,exports){
'use strict';

var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeObject = require('./toBeObject');

module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeObject);
};

},{"./lib/every":12,"./toBeArray":18,"./toBeObject":45}],22:[function(require,module,exports){
'use strict';

var toBeArray = require('./toBeArray');

module.exports = function (size, actual) {
  return toBeArray(actual) && actual.length === size;
};

},{"./toBeArray":18}],23:[function(require,module,exports){
'use strict';

var every = require('./lib/every');
var toBeArray = require('./toBeArray');
var toBeString = require('./toBeString');

module.exports = function (actual) {
  return toBeArray(actual) && every(actual, toBeString);
};

},{"./lib/every":12,"./toBeArray":18,"./toBeString":50}],24:[function(require,module,exports){
'use strict';

var toBeDate = require('./toBeDate');

module.exports = function (otherDate, actual) {
  return toBeDate(actual) && toBeDate(otherDate) && actual.getTime() < otherDate.getTime();
};

},{"./toBeDate":27}],25:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = is.Boolean;

},{"./lib/is":13}],26:[function(require,module,exports){
"use strict";

module.exports = toBeCalculable;

// Assert subject can be used in Mathemetic calculations despite not being a
// Number, for example `"1" * "2" === 2` whereas `"wut?" * 2 === NaN`.
function toBeCalculable(actual) {
  return !isNaN(actual * 2);
}

},{}],27:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = is.Date;

},{"./lib/is":13}],28:[function(require,module,exports){
'use strict';

var toBeArrayOfSize = require('./toBeArrayOfSize');

module.exports = function (actual) {
  return toBeArrayOfSize(0, actual);
};

},{"./toBeArrayOfSize":22}],29:[function(require,module,exports){
'use strict';

var is = require('./lib/is');
var keys = require('./lib/keys');

module.exports = function (actual) {
  return is.Object(actual) && keys(actual).length === 0;
};

},{"./lib/is":13,"./lib/keys":14}],30:[function(require,module,exports){
'use strict';

module.exports = function (actual) {
  return actual === '';
};

},{}],31:[function(require,module,exports){
'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = function (actual) {
  return toBeNumber(actual) && actual % 2 === 0;
};

},{"./toBeNumber":44}],32:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = function (actual) {
  return actual === false || is.False(actual);
}; // eslint-disable-line new-cap

},{"./lib/is":13}],33:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = is.Function;

},{"./lib/is":13}],34:[function(require,module,exports){
'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = function (otherNumber, actual) {
  return toBeNumber(actual) && actual >= otherNumber;
};

},{"./toBeNumber":44}],35:[function(require,module,exports){
'use strict';

var toBeString = require('./toBeString');

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

},{"./toBeString":50}],36:[function(require,module,exports){
'use strict';

var toBeString = require('./toBeString');
var toBeValidDate = require('./toBeValidDate');

module.exports = function (actual) {
  return toBeString(actual) && (isMatch('1999-12-31', actual) || isMatch('1999-12-31T23:59', actual) || isMatch('1999-12-31T23:59:59', actual) || isMatch('1999-12-31T23:59:59.000', actual) || isMatch('1999-12-31T23:59:59.000Z', actual)) && toBeValidDate(new Date(actual));
};

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

},{"./toBeString":50,"./toBeValidDate":52}],37:[function(require,module,exports){
"use strict";

module.exports = function (actual) {
  try {
    return JSON.parse(actual) !== null;
  } catch (err) {
    return false;
  }
};

},{}],38:[function(require,module,exports){
'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = function (otherNumber, actual) {
  return toBeNumber(actual) && actual <= otherNumber;
};

},{"./toBeNumber":44}],39:[function(require,module,exports){
'use strict';

var toBeString = require('./toBeString');

module.exports = function (otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length > otherString.length;
};

},{"./toBeString":50}],40:[function(require,module,exports){
'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = function (number, epsilon, actual) {
  return toBeNumber(actual) && actual >= number - epsilon && actual <= number + epsilon;
};

},{"./toBeNumber":44}],41:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = function (actual) {
  return is.Array(actual) && actual.length > 0;
};

},{"./lib/is":13}],42:[function(require,module,exports){
'use strict';

var is = require('./lib/is');
var keys = require('./lib/keys');

module.exports = function (actual) {
  return is.Object(actual) && keys(actual).length > 0;
};

},{"./lib/is":13,"./lib/keys":14}],43:[function(require,module,exports){
'use strict';

var toBeString = require('./toBeString');

module.exports = function (actual) {
  return toBeString(actual) && actual.length > 0;
};

},{"./toBeString":50}],44:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = function (actual) {
  return !isNaN(parseFloat(actual)) && !is.String(actual);
};

},{"./lib/is":13}],45:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = is.Object;

},{"./lib/is":13}],46:[function(require,module,exports){
'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = function (actual) {
  return toBeNumber(actual) && actual % 2 !== 0;
};

},{"./toBeNumber":44}],47:[function(require,module,exports){
"use strict";

module.exports = function (actual) {
  return actual instanceof RegExp;
};

},{}],48:[function(require,module,exports){
'use strict';

var toBeString = require('./toBeString');

module.exports = function (otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length === otherString.length;
};

},{"./toBeString":50}],49:[function(require,module,exports){
'use strict';

var toBeString = require('./toBeString');

module.exports = function (otherString, actual) {
  return toBeString(actual) && toBeString(otherString) && actual.length < otherString.length;
};

},{"./toBeString":50}],50:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = is.String;

},{"./lib/is":13}],51:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = function (actual) {
  return actual === true || is.True(actual);
}; // eslint-disable-line new-cap

},{"./lib/is":13}],52:[function(require,module,exports){
'use strict';

var is = require('./lib/is');

module.exports = function (actual) {
  return is.Date(actual) && !isNaN(actual.getTime());
};

},{"./lib/is":13}],53:[function(require,module,exports){
'use strict';

var toBeString = require('./toBeString');

module.exports = function (actual) {
  return toBeString(actual) && actual.search(/\S/) === -1;
};

},{"./toBeString":50}],54:[function(require,module,exports){
'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = function (actual) {
  return toBeNumber(actual) && (actual === 0 || actual % 1 === 0);
};

},{"./toBeNumber":44}],55:[function(require,module,exports){
'use strict';

var toBeNumber = require('./toBeNumber');

module.exports = function (floor, ceiling, actual) {
  return toBeNumber(actual) && actual >= floor && actual <= ceiling;
};

},{"./toBeNumber":44}],56:[function(require,module,exports){
'use strict';

var toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = function (subString, actual) {
  return toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.slice(actual.length - subString.length, actual.length) === subString;
};

},{"./toBeNonEmptyString":43}],57:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArray = require('./toBeArray');

module.exports = memberMatcherFor(toBeArray);

},{"./lib/memberMatcherFor":15,"./toBeArray":18}],58:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfBooleans = require('./toBeArrayOfBooleans');

module.exports = memberMatcherFor(toBeArrayOfBooleans);

},{"./lib/memberMatcherFor":15,"./toBeArrayOfBooleans":19}],59:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfNumbers = require('./toBeArrayOfNumbers');

module.exports = memberMatcherFor(toBeArrayOfNumbers);

},{"./lib/memberMatcherFor":15,"./toBeArrayOfNumbers":20}],60:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfObjects = require('./toBeArrayOfObjects');

module.exports = memberMatcherFor(toBeArrayOfObjects);

},{"./lib/memberMatcherFor":15,"./toBeArrayOfObjects":21}],61:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeArrayOfSize = require('./toBeArrayOfSize');

module.exports = function (key, size, actual) {
  return toBeObject(actual) && toBeArrayOfSize(size, actual[key]);
};

},{"./toBeArrayOfSize":22,"./toBeObject":45}],62:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeArrayOfStrings = require('./toBeArrayOfStrings');

module.exports = memberMatcherFor(toBeArrayOfStrings);

},{"./lib/memberMatcherFor":15,"./toBeArrayOfStrings":23}],63:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeBoolean = require('./toBeBoolean');

module.exports = memberMatcherFor(toBeBoolean);

},{"./lib/memberMatcherFor":15,"./toBeBoolean":25}],64:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeCalculable = require('./toBeCalculable');

module.exports = memberMatcherFor(toBeCalculable);

},{"./lib/memberMatcherFor":15,"./toBeCalculable":26}],65:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeDate = require('./toBeDate');

module.exports = memberMatcherFor(toBeDate);

},{"./lib/memberMatcherFor":15,"./toBeDate":27}],66:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeAfter = require('./toBeAfter');

module.exports = function (key, date, actual) {
  return toBeObject(actual) && toBeAfter(date, actual[key]);
};

},{"./toBeAfter":17,"./toBeObject":45}],67:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeBefore = require('./toBeBefore');

module.exports = function (key, date, actual) {
  return toBeObject(actual) && toBeBefore(date, actual[key]);
};

},{"./toBeBefore":24,"./toBeObject":45}],68:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEmptyArray = require('./toBeEmptyArray');

module.exports = memberMatcherFor(toBeEmptyArray);

},{"./lib/memberMatcherFor":15,"./toBeEmptyArray":28}],69:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEmptyObject = require('./toBeEmptyObject');

module.exports = memberMatcherFor(toBeEmptyObject);

},{"./lib/memberMatcherFor":15,"./toBeEmptyObject":29}],70:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEmptyString = require('./toBeEmptyString');

module.exports = memberMatcherFor(toBeEmptyString);

},{"./lib/memberMatcherFor":15,"./toBeEmptyString":30}],71:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeEvenNumber = require('./toBeEvenNumber');

module.exports = memberMatcherFor(toBeEvenNumber);

},{"./lib/memberMatcherFor":15,"./toBeEvenNumber":31}],72:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeFalse = require('./toBeFalse');

module.exports = memberMatcherFor(toBeFalse);

},{"./lib/memberMatcherFor":15,"./toBeFalse":32}],73:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeHtmlString = require('./toBeHtmlString');

module.exports = memberMatcherFor(toBeHtmlString);

},{"./lib/memberMatcherFor":15,"./toBeHtmlString":35}],74:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeIso8601 = require('./toBeIso8601');

module.exports = memberMatcherFor(toBeIso8601);

},{"./lib/memberMatcherFor":15,"./toBeIso8601":36}],75:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeJsonString = require('./toBeJsonString');

module.exports = memberMatcherFor(toBeJsonString);

},{"./lib/memberMatcherFor":15,"./toBeJsonString":37}],76:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeString = require('./toBeString');

module.exports = function (key, actual) {
  return toBeString(key) && toBeObject(actual) && key in actual;
};

},{"./toBeObject":45,"./toBeString":50}],77:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeFunction = require('./toBeFunction');

module.exports = memberMatcherFor(toBeFunction);

},{"./lib/memberMatcherFor":15,"./toBeFunction":33}],78:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNonEmptyArray = require('./toBeNonEmptyArray');

module.exports = memberMatcherFor(toBeNonEmptyArray);

},{"./lib/memberMatcherFor":15,"./toBeNonEmptyArray":41}],79:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNonEmptyObject = require('./toBeNonEmptyObject');

module.exports = memberMatcherFor(toBeNonEmptyObject);

},{"./lib/memberMatcherFor":15,"./toBeNonEmptyObject":42}],80:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = memberMatcherFor(toBeNonEmptyString);

},{"./lib/memberMatcherFor":15,"./toBeNonEmptyString":43}],81:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeNumber = require('./toBeNumber');

module.exports = memberMatcherFor(toBeNumber);

},{"./lib/memberMatcherFor":15,"./toBeNumber":44}],82:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeWithinRange = require('./toBeWithinRange');

module.exports = function (key, floor, ceiling, actual) {
  return toBeObject(actual) && toBeWithinRange(floor, ceiling, actual[key]);
};

},{"./toBeObject":45,"./toBeWithinRange":55}],83:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeObject = require('./toBeObject');

module.exports = memberMatcherFor(toBeObject);

},{"./lib/memberMatcherFor":15,"./toBeObject":45}],84:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeOddNumber = require('./toBeOddNumber');

module.exports = memberMatcherFor(toBeOddNumber);

},{"./lib/memberMatcherFor":15,"./toBeOddNumber":46}],85:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeString = require('./toBeString');

module.exports = memberMatcherFor(toBeString);

},{"./lib/memberMatcherFor":15,"./toBeString":50}],86:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeLongerThan = require('./toBeLongerThan');

module.exports = function (key, other, actual) {
  return toBeObject(actual) && toBeLongerThan(other, actual[key]);
};

},{"./toBeLongerThan":39,"./toBeObject":45}],87:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeSameLengthAs = require('./toBeSameLengthAs');

module.exports = function (key, other, actual) {
  return toBeObject(actual) && toBeSameLengthAs(other, actual[key]);
};

},{"./toBeObject":45,"./toBeSameLengthAs":48}],88:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toBeShorterThan = require('./toBeShorterThan');

module.exports = function (key, other, actual) {
  return toBeObject(actual) && toBeShorterThan(other, actual[key]);
};

},{"./toBeObject":45,"./toBeShorterThan":49}],89:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeTrue = require('./toBeTrue');

module.exports = memberMatcherFor(toBeTrue);

},{"./lib/memberMatcherFor":15,"./toBeTrue":51}],90:[function(require,module,exports){
'use strict';

var toBeObject = require('./toBeObject');
var toHaveMember = require('./toHaveMember');

module.exports = function (key, actual) {
  return toBeObject(actual) && toHaveMember(key, actual) && typeof actual[key] === 'undefined';
};

},{"./toBeObject":45,"./toHaveMember":76}],91:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeWhitespace = require('./toBeWhitespace');

module.exports = memberMatcherFor(toBeWhitespace);

},{"./lib/memberMatcherFor":15,"./toBeWhitespace":53}],92:[function(require,module,exports){
'use strict';

var memberMatcherFor = require('./lib/memberMatcherFor');
var toBeWholeNumber = require('./toBeWholeNumber');

module.exports = memberMatcherFor(toBeWholeNumber);

},{"./lib/memberMatcherFor":15,"./toBeWholeNumber":54}],93:[function(require,module,exports){
'use strict';

var toBeNonEmptyString = require('./toBeNonEmptyString');

module.exports = function (subString, actual) {
  return toBeNonEmptyString(actual) && toBeNonEmptyString(subString) && actual.slice(0, subString.length) === subString;
};

},{"./toBeNonEmptyString":43}],94:[function(require,module,exports){
"use strict";

module.exports = function (actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return true;
  }
};

},{}],95:[function(require,module,exports){
"use strict";

module.exports = function (type, actual) {
  try {
    actual();
    return false;
  } catch (err) {
    return err.name === type;
  }
};

},{}]},{},[11]);
