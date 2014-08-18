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

(function() {

  var matchers = {};
  var priv = {};

  /**
   * @inner
   * @param  {Object} object
   * @param  {Function} fn
   */
  priv.each = function(object, fn) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        fn.call(this, object[key], key, object);
      }
    }
  };

  /**
   * @inner
   * @param  {Object} object
   * @param  {Function} fn
   * @param  {*} memo
   * @return {*} memo
   */
  priv.reduce = function(object, fn, memo) {
    priv.each.call(this, object, function(el, ix, list) {
      memo = fn(memo, el, ix, list);
    });
    return memo;
  };

  /**
   * @inner
   * @param  {Array} array
   * @param  {Function} fn
   * @return {Boolean}
   */
  priv.all = function(array, fn) {
    var i;
    var len = array.length;
    for (i = 0; i < len; i++) {
      if (fn.call(this, array[i], i, array) === false) {
        return false;
      }
    }
    return true;
  };

  /**
   * @inner
   * @param  {String} matcherName
   * @return {Boolean}
   */
  priv.expectAllMembers = function(matcherName) {
    return priv.all.call(this, this.actual, function(item) {
      return matchers[matcherName].call({
        actual: item
      });
    });
  };

  /**
   * Assert subject is of type
   * @inner
   * @param  {*} subject
   * @param  {String} type
   * @return {Boolean}
   */
  priv.is = function(subject, type) {
    return Object.prototype.toString.call(subject) === '[object ' + type + ']';
  };

  /**
   * Assert subject is an HTML Element with the given node type
   * @inner
   * @param  {*} subject
   * @param  {String} type
   * @return {Boolean}
   */
  priv.isHtmlElementOfType = function(subject, type) {
    return subject && subject.nodeType === type;
  };

  /**
   * Convert Array-like Object to true Array
   * @inner
   * @param  {*} list
   * @return {Array}
   */
  priv.toArray = function(list) {
    return [].slice.call(list);
  };

  /**
   * @inner
   * @param  {String} matcherName
   * @param  {String} memberName
   * @param  (*) ...
   * @return {Boolean}
   */
  priv.assertMember = function( /* matcherName, memberName, ... */ ) {
    var args = priv.toArray(arguments);
    var matcherName = args.shift();
    var memberName = args.shift();
    return priv.is(this.actual, 'Object') && matchers[matcherName].apply({
      actual: this.actual[memberName]
    }, args);
  };

  /**
   * @summary
   * Format the failure message for member matchers such as toHaveString('surname').
   *
   * @inner
   * @param  {Object}  util   Provided by Jasmine.
   * @param  {String}  name   Name of the matcher, such as toBeString.
   * @param  {Array}   args   converted arguments.
   * @param  {Boolean} pass   Whether the test passed.
   * @param  {*}       actual The expected value.
   * @return {String}         The message to display on failure.
   */
  priv.formatFailMessage = function(util, name, args, pass, actual) {
    if (name.search(/^toHave/) === -1) {
      return util.buildFailureMessage.apply(null, [name, pass, actual].concat(args));
    }
    var memberName = args.shift();
    return util.buildFailureMessage.apply(null, [name, pass, actual].concat(args))
      .replace('Expected', 'Expected member "' + memberName + '" of')
      .replace(' to have ', ' to be ');
  };

  /**
   * @summary
   * Convert Jasmine 1.0 matchers into the format introduced in Jasmine 2.0.
   *
   * @inner
   * @param  {Object} v1Matchers
   * @return {Object} v2Matchers
   */
  priv.adaptMatchers = function(v1Matchers) {
    return priv.reduce(v1Matchers, function(v2Matchers, matcher, name) {
      v2Matchers[name] = function(util) {
        return {
          compare: function(actual /*, expected, ...*/ ) {
            var args = priv.toArray(arguments).slice(1);
            var pass = matcher.apply({
              actual: actual
            }, args);
            return {
              pass: pass,
              message: priv.formatFailMessage(util, name, args, pass, actual)
            };
          }
        };
      };
      return v2Matchers;
    }, {});
  };

  /**
   * @file Arrays
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   */

  /**
   * @alias
   * expect(array):toBeArray
   *
   * @summary
   * Assert subject is a true Array, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @return {Boolean}
   */
  matchers.toBeArray = function() {
    return this.actual instanceof Array;
  };

  /**
   * @alias
   * expect(array):toBeArrayOfSize
   *
   * @summary
   * Assert subject is not only a true Array, but one with a specific number of members.
   *
   * @param {Number} size
   * @return {Boolean}
   */
  matchers.toBeArrayOfSize = function(size) {
    return priv.is(this.actual, 'Array') && this.actual.length === size;
  };

  /**
   * @alias
   * expect(array):toBeEmptyArray
   *
   * @summary
   * Assert subject is not only a true Array, but one without any members.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyArray = function() {
    return matchers.toBeArrayOfSize.call(this, 0);
  };

  /**
   * @alias
   * expect(array):toBeNonEmptyArray
   *
   * @summary
   * Assert subject is not only a true Array, but one with at least one member.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyArray = function() {
    return priv.is(this.actual, 'Array') && this.actual.length > 0;
  };

  /**
   * @inner
   * @param {String} toBeX
   * @return {Function}
   */
  priv.createToBeArrayOfXsMatcher = function(toBeX) {
    return function() {
      return priv.is(this.actual, 'Array') && priv.expectAllMembers.call(this, toBeX);
    };
  };

  /**
   * @alias
   * expect(array):toBeArrayOfObjects
   *
   * @summary
   * Assert subject is an Array which is either empty or contains only Objects.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfObjects = function() {
    return priv.is(this.actual, 'Array') && priv.expectAllMembers.call(this, 'toBeObject');
  };

  /**
   * @alias
   * expect(array):toBeArrayOfStrings
   *
   * @summary
   * Assert subject is an Array which is either empty or contains only Strings.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfStrings = function() {
    return priv.is(this.actual, 'Array') && priv.expectAllMembers.call(this, 'toBeString');
  };

  /**
   * @alias
   * expect(array):toBeArrayOfNumbers
   *
   * @summary
   * Assert subject is an Array which is either empty or contains only Numbers.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfNumbers = function() {
    return priv.is(this.actual, 'Array') && priv.expectAllMembers.call(this, 'toBeNumber');
  };

  /**
   * @alias
   * expect(array):toBeArrayOfBooleans
   *
   * @summary
   * Assert subject is an Array which is either empty or contains only Booleans.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfBooleans = function() {
    return priv.is(this.actual, 'Array') && priv.expectAllMembers.call(this, 'toBeBoolean');
  };

  /**
   * @file Booleans
   *
   * @description
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   */

  /**
   * @alias
   * expect(boolean):toBeBoolean
   *
   * @summary
   * Assert subject is not only truthy or falsy, but an actual Boolean.
   *
   * @return {Boolean}
   */
  matchers.toBeBoolean = function() {
    return matchers.toBeTrue.call(this) || matchers.toBeFalse.call(this);
  };

  /**
   * @alias
   * expect(boolean):toBeTrue
   *
   * @summary
   * Assert subject is not only truthy, but an actual Boolean true.
   *
   * @return {Boolean}
   */
  matchers.toBeTrue = function() {
    return this.actual === true || this.actual instanceof Boolean && this.actual.valueOf() === true;
  };

  /**
   * @alias
   * expect(boolean):toBeFalse
   *
   * @summary
   * Assert subject is not only falsy, but an actual Boolean false.
   *
   * @return {Boolean}
   */
  matchers.toBeFalse = function() {
    return this.actual === false || this.actual instanceof Boolean && this.actual.valueOf() === false;
  };

  /**
   * @file Browser
   *
   * @description
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   */

  /**
   * @alias
   * expect(window):toBeWindow
   *
   * @summary
   * Assert subject is a browser Window global, whether that be the parent window or those
   * created within iframes or other windows.
   *
   * @return {Boolean}
   */
  matchers.toBeWindow = function() {
    return this.actual && typeof this.actual === 'object' && this.actual.window === this.actual;
  };

  /**
   * @alias
   * expect(document):toBeDocument
   *
   * @summary
   * Assert subject is a browser Window global, whether that be the parent window or those
   * created within iframes or other windows.
   *
   * @return {Boolean}
   */
  matchers.toBeDocument = function() {
    return this.actual && typeof this.actual === 'object' && this.actual instanceof window.HTMLDocument;
  };

  /**
   * @alias
   * expect(htmlElement):toBeHtmlNode
   *
   * @summary
   * Assert subject is an HTML Element.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlNode = function() {
    return priv.isHtmlElementOfType(this.actual, 1);
  };

  /**
   * @alias
   * expect(htmlElement):toBeHtmlTextNode
   *
   * @summary
   * Assert subject is an HTML Text Element.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlTextNode = function() {
    return priv.isHtmlElementOfType(this.actual, 3);
  };

  /**
   * @alias
   * expect(htmlElement):toBeHtmlCommentNode
   *
   * @summary
   * Assert subject is an HTML Comment Element.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlCommentNode = function() {
    return priv.isHtmlElementOfType(this.actual, 8);
  };

  /**
   * @file Dates
   *
   * @description
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   */

  /**
   * @alias
   * expect(date):toBeDate
   *
   * @summary
   * Assert subject is a true Date, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @return {Boolean}
   */
  matchers.toBeDate = function() {
    return this.actual instanceof Date;
  };

  /**
   * @alias
   * expect(string):toBeIso8601
   *
   * @summary
   * Assert subject is a Date String conforming to the ISO 8601 standard.
   *
   * @return {Boolean}
   */
  matchers.toBeIso8601 = function() {
    return matchers.toBeString.call(this)
      && this.actual.length >= 10
      && new Date(this.actual).toString() !== 'Invalid Date'
      && new Date(this.actual).toISOString().slice(0, this.actual.length) === this.actual;
  };

  /**
   * @alias
   * expect(date):toBeBefore
   *
   * @summary
   * Assert subject is a Date occurring before another Date.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeBefore = function(date) {
    return matchers.toBeDate.call(this) && matchers.toBeDate.call({ actual: date }) && this.actual.getTime() < date.getTime();
  };

  /**
   * @alias
   * expect(date):toBeAfter
   *
   * @summary
   * Assert subject is a Date occurring after another Date.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeAfter = function(date) {
    return matchers.toBeBefore.call({ actual: date }, this.actual);
  };

  /**
   * @file Errors
   *
   * @description
   * See {@link http://git.io/jasmine-error-testing|Unit testing Errors with Jasmine}.
   */

  /**
   * @alias
   * expect(function):toThrowError
   *
   * @summary
   * Asserts subject throws an Error of any type.
   *
   * @return {Boolean}
   */
  matchers.toThrowError = function() {
    var threwError = false;
    try {
      this.actual();
    } catch (e) {
      threwError = true;
    }
    return threwError;
  };

  /**
   * @alias
   * expect(function):toThrowErrorOfType
   *
   * @summary
   * Asserts subject throws an Error of a specific type, such as "TypeError".
   *
   * @param  {String} type
   * @return {Boolean}
   */
  matchers.toThrowErrorOfType = function(type) {
    var threwErrorOfType = false;
    try {
      this.actual();
    } catch (e) {
      threwErrorOfType = (e.name === type);
    }
    return threwErrorOfType;
  };

  /**
   * @file Numbers
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   */

  /**
   * @alias
   * expect(number):toBeNumber
   *
   * @summary
   * Assert subject is not only calculable, but an actual Number
   *
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * @alias
   * expect(number):toBeEvenNumber
   *
   * @summary
   * Assert subject is an even Number.
   *
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * @alias
   * expect(number):toBeOddNumber
   *
   * @summary
   * Assert subject is an odd Number.
   *
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * @alias
   * expect(mixed):toBeCalculable
   *
   * @summary
   * Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   *
   * @example
   * // If all strings are numeric, JavaScript will cast them all as expect(number):
   * "1" * "2" === 2 (pass)
   *
   * @example
   * // If any string is not numeric, JavaScript will cast them all as Strings.
   * "wut?" * 2 === NaN (fail)
   *
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };

  /**
   * @alias
   * expect(number):toBeWithinRange
   *
   * @summary
   * Assert value falls on or between floor and ceiling.
   *
   * @param {Number} floor
   * @param {Number} ceiling
   * @return {Boolean}
   */
  matchers.toBeWithinRange = function(floor, ceiling) {
    return matchers.toBeNumber.call(this) && this.actual >= floor && this.actual <= ceiling;
  };

  /**
   * @alias
   * expect(number):toBeWholeNumber
   *
   * @summary
   * Assert value is a number with no decimal places.
   *
   * @return {Boolean}
   */
  matchers.toBeWholeNumber = function() {
    return matchers.toBeNumber.call(this) && (this.actual === 0 || this.actual % 1 === 0);
  };

  /**
   * @file Objects
   *
   * @description
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   */

  /**
   * @inner
   *
   * @summary
   * Report how many instance members the given Object has.
   *
   * @param  {Object} object
   * @return {Number}
   */
  priv.countMembers = function(object) {
    return priv.reduce(object, function(memo, el, ix) {
      return memo + 1;
    }, 0);
  };

  /**
   * @alias
   * expect(object):toBeObject
   *
   * @summary
   * Assert subject is a true Object, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @return {Boolean}
   */
  matchers.toBeObject = function() {
    return this.actual instanceof Object;
  };

  /**
   * @alias
   * expect(object):toBeEmptyObject
   *
   * @summary
   * Assert subject is a true Object with no instance members.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) === 0;
  };

  /**
   * @alias
   * expect(object):toBeNonEmptyObject
   *
   * @summary
   * Assert subject is a true Object with at least one instance member.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) > 0;
  };

  /**
   * @alias
   * expect(object):toImplement
   *
   * @summary
   * Assert subject is a true Object which features at least the same keys as `other` (regardless of
   * whether it also has other members).
   *
   * @param  {Object} other
   * @return {Boolean}
   */
  matchers.toImplement = function(other) {
    if (!priv.is(this.actual, 'Object') || !priv.is(other, 'Object')) {
      return false;
    }
    for (var key in other) {
      if (key in this.actual) {
        continue;
      }
      return false;
    }
    return true;
  };

  /**
   * @alias
   * expect(function):toBeFunction
   *
   * @summary
   * Assert subject is a true Function, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @return {Boolean}
   */
  matchers.toBeFunction = function() {
    return this.actual instanceof Function;
  };

  /**
   * @file Strings
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   */

  /**
   * @alias
   * expect(string):toBeString
   *
   * @summary
   * Assert subject is a String.
   *
   * @return {Boolean}
   */
  matchers.toBeString = function() {
    return priv.is(this.actual, 'String');
  };

  /**
   * @alias
   * expect(string):toBeEmptyString
   *
   * @summary
   * Assert subject is a String of length 0.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyString = function() {
    return this.actual === '';
  };

  /**
   * @alias
   * expect(string):toBeNonEmptyString
   *
   * @summary
   * Assert subject is a String with at least 1 character.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyString = function() {
    return matchers.toBeString.call(this) && this.actual.length > 0;
  };

  /**
   * @alias
   * expect(string):toBeHtmlString
   *
   * @summary
   * Assert subject is string containing HTML Markup.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlString = function() {
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
    return matchers.toBeString.call(this) && this.actual.search(/<("[^"]*"|'[^']*'|[^'">])*>/) !== -1;
  };

  /**
   * @alias
   * expect(string):toBeJsonString
   *
   * @summary
   * Assert subject is string containing parseable JSON.
   *
   * @return {Boolean}
   */
  matchers.toBeJsonString = function() {
    var isParseable;
    var json;
    try {
      json = JSON.parse(this.actual);
    } catch (e) {
      isParseable = false;
    }
    return isParseable !== false && json !== null;
  };

  /**
   * @alias
   * expect(string):toBeWhitespace
   *
   * @summary
   * Assert subject is a String containing nothing but whitespace.
   *
   * @return {Boolean}
   */
  matchers.toBeWhitespace = function() {
    return matchers.toBeString.call(this) && this.actual.search(/\S/) === -1;
  };

  /**
   * @alias
   * expect(string):toStartWith
   *
   * @summary
   * Assert subject is a String whose first characters match our expected string.
   *
   * @param  {String} expected
   * @return {Boolean}
   */
  matchers.toStartWith = function(expected) {
    if (!matchers.toBeNonEmptyString.call(this) || !matchers.toBeNonEmptyString.call({
      actual: expected
    })) {
      return false;
    }
    return this.actual.slice(0, expected.length) === expected;
  };

  /**
   * @alias
   * expect(string):toEndWith
   *
   * @summary
   * Assert subject is a String whose last characters match our expected string.
   *
   * @param  {String} expected
   * @return {Boolean}
   */
  matchers.toEndWith = function(expected) {
    if (!matchers.toBeNonEmptyString.call(this) || !matchers.toBeNonEmptyString.call({
      actual: expected
    })) {
      return false;
    }
    return this.actual.slice(this.actual.length - expected.length, this.actual.length) === expected;
  };

  /**
   * @alias
   * expect(string):toBeLongerThan
   *
   * @summary
   * Assert subject is a String whose length is greater than our other string.
   *
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeLongerThan = function(other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length > other.length;
  };

  /**
   * @alias
   * expect(string):toBeShorterThan
   *
   * @summary
   * Assert subject is a String whose length is greater than our other string.
   *
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeShorterThan = function(other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length < other.length;
  };

  /**
   * @alias
   * expect(string):toBeSameLengthAs
   *
   * @summary
   * Assert subject is a String whose length is equal to our other string.
   *
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeSameLengthAs = function(other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length === other.length;
  };

  /**
   * ArrayMembers
   */

  /**
   * @alias
   * expect(object):toHaveArray
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeArray', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveArrayOfBooleans
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfBooleans = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfBooleans', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveArrayOfNumbers
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfNumbers = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfNumbers', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveArrayOfObjects
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfObjects = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfObjects', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveArrayOfSize
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {Number} size
   * @return {Boolean}
   */
  matchers.toHaveArrayOfSize = function(memberName, size) {
    return priv.assertMember.call(this, 'toBeArrayOfSize', memberName, size);
  };

  /**
   * @alias
   * expect(object):toHaveNonEmptyArray
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyArray', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveEmptyArray
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyArray', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveArrayOfStrings
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfStrings = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfStrings', memberName);
  };

  /**
   * BooleanMembers
   */

  /**
   * @alias
   * expect(object):toHaveBoolean
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveBoolean = function(memberName) {
    return priv.assertMember.call(this, 'toBeBoolean', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveFalse
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveFalse = function(memberName) {
    return priv.assertMember.call(this, 'toBeFalse', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveTrue
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveTrue = function(memberName) {
    return priv.assertMember.call(this, 'toBeTrue', memberName);
  };

  /**
   * BrowserMembers
   */

  /**
   * @alias
   * expect(object):toHaveHtmlNode
   *
   * @summary
   * Assert subject is a true Object containing a property at memberName which is an HTML Element.
   *
   * @description
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlNode', memberName);
  };

  /**
   * DateMembers
   */

  /**
   * @alias
   * expect(object):toHaveDate
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveDate = function(memberName) {
    return priv.assertMember.call(this, 'toBeDate', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveDateAfter
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-bdate-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {Date} date
   * @return {Boolean}
   */
  matchers.toHaveDateAfter = function(memberName, date) {
    return priv.assertMember.call(this, 'toBeDateAfter', memberName, date);
  };

  /**
   * @alias
   * expect(object):toHaveDateBefore
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-browser-date|Unit testing Browsers with Dates}.
   *
   * @param  {String} memberName
   * @param  {Date} date
   * @return {Boolean}
   */
  matchers.toHaveDateBefore = function(memberName, date) {
    return priv.assertMember.call(this, 'toBeDateBefore', memberName, date);
  };

  /**
   * @alias
   * expect(object):toHaveIso8601
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveIso8601 = function(memberName) {
    return priv.assertMember.call(this, 'toBeIso8601', memberName);
  };

  /**
   * NumberMembers
   */

  /**
   * @alias
   * expect(object):toHaveNumber
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeNumber', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveNumberWithinRange
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {Number} floor
   * @param  {Number} ceiling
   * @return {Boolean}
   */
  matchers.toHaveNumberWithinRange = function(memberName, floor, ceiling) {
    return priv.assertMember.call(this, 'toBeWithinRange', memberName, floor, ceiling);
  };

  /**
   * @alias
   * expect(object):toHaveCalculable
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveCalculable = function(memberName) {
    return priv.assertMember.call(this, 'toBeCalculable', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveEvenNumber
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEvenNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeEvenNumber', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveOddNumber
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveOddNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeOddNumber', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveWholeNumber
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWholeNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeWholeNumber', memberName);
  };

  /**
   * ObjectMembers
   */

  /**
   * @alias
   * expect(object):toHaveMethod
   *
   * @summary
   * Assert subject is a true Object containing a property at memberName which is a Function.
   *
   * @description
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMethod = function(memberName) {
    return priv.assertMember.call(this, 'toBeFunction', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveObject
   *
   * @summary
   * Assert subject is a true Object containing a property at memberName which is a true Object.
   *
   * @description
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeObject', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveEmptyObject
   *
   * @summary
   * Assert subject is a true Object containing a property at memberName which is a true Object with
   * no instance members.
   *
   * @description
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyObject', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveNonEmptyObject
   *
   * @summary
   * Assert subject is a true Object containing a property at memberName which is a true Object with
   * at least one instance member.
   *
   * @description
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyObject', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveMember
   *
   * @summary
   * Assert subject is a true Object containing a property at memberName which is of any value,
   * including undefined.
   *
   * @description
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMember = function(memberName) {
    return memberName && priv.is(this.actual, 'Object') && memberName in this.actual;
  };

  /**
   * StringMembers
   */

  /**
   * @alias
   * expect(object):toHaveEmptyString
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyString', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveHtmlString
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlString = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlString', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveJsonString
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveJsonString = function(memberName) {
    return priv.assertMember.call(this, 'toBeJsonString', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveNonEmptyString
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyString', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveString
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveString = function(memberName) {
    return priv.assertMember.call(this, 'toBeString', memberName);
  };

  /**
   * @alias
   * expect(object):toHaveStringLongerThan
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringLongerThan = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeLongerThan', memberName, other);
  };

  /**
   * @alias
   * expect(object):toHaveStringSameLengthAs
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringSameLengthAs = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeSameLengthAs', memberName, other);
  };

  /**
   * @alias
   * expect(object):toHaveStringShorterThan
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toHaveStringShorterThan = function(memberName, other) {
    return priv.assertMember.call(this, 'toBeShorterThan', memberName, other);
  };

  /**
   * @alias
   * expect(object):toHaveWhitespaceString
   *
   * @summary
   * .
   *
   * @description
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWhitespaceString = function(memberName) {
    return priv.assertMember.call(this, 'toBeWhitespace', memberName);
  };

  // Create adapters for the original matchers so they can be compatible with Jasmine 2.0.
  var matchersV2 = priv.adaptMatchers(matchers);

  beforeEach(function() {
    if (typeof this.addMatchers === 'function') {
      this.addMatchers(matchers);
    } else if (typeof jasmine.addMatchers === 'function') {
      jasmine.addMatchers(matchersV2);
    }
  });

}());
