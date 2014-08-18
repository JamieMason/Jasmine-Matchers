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

  var jasmineVersion = 0;
  var matchers = {};
  var priv = {};

  if (typeof this.addMatchers === 'function') {
    jasmineVersion = 1;
  } else if (typeof jasmine.addMatchers === 'function') {
    jasmineVersion = 2;
  }

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
   * @description
   * <p>Format the failure message for member matchers such as toHaveString('surname').
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
   * @description
   * <p>Convert Jasmine 1.0 matchers into the format introduced in Jasmine 2.0.
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
   * @module Arrays
   */

  /**
   * @inner
   * @param {String} toBeX
   * @return {Function}
   * @memberOf priv
   */
  priv.createToBeArrayOfXsMatcher = function(toBeX) {
    return function() {
      return priv.is(this.actual, 'Array') && priv.expectAllMembers.call(this, toBeX);
    };
  };

  /**
   * @alias
   * module:Arrays.toBeArray
   *
   * @description
   * <p>Assert subject is a true Array, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArray = function() {
    return this.actual instanceof Array;
  };

  /**
   * @alias
   * module:Arrays.toBeArrayOfSize
   *
   * @description
   * <p>Assert subject is not only a true Array, but one with a specific number of members.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param {Number} size
   * @return {Boolean}
   */
  matchers.toBeArrayOfSize = function(size) {
    return priv.is(this.actual, 'Array') && this.actual.length === size;
  };

  /**
   * @alias
   * module:Arrays.toBeEmptyArray
   *
   * @description
   * <p>Assert subject is not only a true Array, but one without any members.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyArray = function() {
    return matchers.toBeArrayOfSize.call(this, 0);
  };

  /**
   * @alias
   * module:Arrays.toBeNonEmptyArray
   *
   * @description
   * <p>Assert subject is not only a true Array, but one with at least one member.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyArray = function() {
    return priv.is(this.actual, 'Array') && this.actual.length > 0;
  };

  /**
   * @alias
   * module:Arrays.toBeArrayOfObjects
   *
   * @description
   * <p>Assert subject is an Array which is either empty or contains only Objects.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfObjects = priv.createToBeArrayOfXsMatcher('toBeObject');

  /**
   * @alias
   * module:Arrays.toBeArrayOfStrings
   *
   * @description
   * <p>Assert subject is an Array which is either empty or contains only Strings.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfStrings = priv.createToBeArrayOfXsMatcher('toBeString');

  /**
   * @alias
   * module:Arrays.toBeArrayOfNumbers
   *
   * @description
   * <p>Assert subject is an Array which is either empty or contains only Numbers.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfNumbers = priv.createToBeArrayOfXsMatcher('toBeNumber');

  /**
   * @alias
   * module:Arrays.toBeArrayOfBooleans
   *
   * @description
   * <p>Assert subject is an Array which is either empty or contains only Booleans.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfBooleans = priv.createToBeArrayOfXsMatcher('toBeBoolean');

  /**
   * @module Booleans
   */

  /**
   * @alias
   * module:Booleans.toBeBoolean
   *
   * @description
   * <p>Assert subject is not only truthy or falsy, but an actual Boolean.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeBoolean = function() {
    return matchers.toBeTrue.call(this) || matchers.toBeFalse.call(this);
  };

  /**
   * @alias
   * module:Booleans.toBeTrue
   *
   * @description
   * <p>Assert subject is not only truthy, but an actual Boolean true.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeTrue = function() {
    return this.actual === true || this.actual instanceof Boolean && this.actual.valueOf() === true;
  };

  /**
   * @alias
   * module:Booleans.toBeFalse
   *
   * @description
   * <p>Assert subject is not only falsy, but an actual Boolean false.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFalse = function() {
    return this.actual === false || this.actual instanceof Boolean && this.actual.valueOf() === false;
  };

  /**
   * @module BrowserMembers
   */

  /**
   * @alias
   * module:BrowserMembers.toBeHtmlNode
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is an HTML Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlNode', memberName);
  };

  /**
   * @module Browser
   */

  /**
   * @alias
   * module:Browser.toBeWindow
   *
   * @description
   * <p>Assert subject is a browser Window global, whether that be the parent window or those
   * created within iframes or other windows.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWindow = function() {
    return this.actual && typeof this.actual === 'object' && this.actual.window === this.actual;
  };

  /**
   * @alias
   * module:Browser.toBeDocument
   *
   * @description
   * <p>Assert subject is a browser Window global, whether that be the parent window or those
   * created within iframes or other windows.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDocument = function() {
    return this.actual && typeof this.actual === 'object' && this.actual instanceof window.HTMLDocument;
  };

  /**
   * @alias
   * module:Browser.toBeHtmlNode
   *
   * @description
   * <p>Assert subject is an HTML Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlNode = function() {
    return priv.isHtmlElementOfType(this.actual, 1);
  };

  /**
   * @alias
   * module:Browser.toBeHtmlTextNode
   *
   * @description
   * <p>Assert subject is an HTML Text Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlTextNode = function() {
    return priv.isHtmlElementOfType(this.actual, 3);
  };

  /**
   * @alias
   * module:Browser.toBeHtmlCommentNode
   *
   * @description
   * <p>Assert subject is an HTML Comment Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlCommentNode = function() {
    return priv.isHtmlElementOfType(this.actual, 8);
  };

  /**
   * @module Dates
   */

  /**
   * @alias
   * module:Dates.toBeDate
   *
   * @description
   * <p>Assert subject is a true Date, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDate = function() {
    return this.actual instanceof Date;
  };

  /**
   * @alias
   * module:Dates.toBeIso8601
   *
   * @description
   * <p>Assert subject is a Date String conforming to the ISO 8601 standard.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
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
   * module:Dates.toBeBefore
   *
   * @description
   * <p>Assert subject is a Date occurring before another Date.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeBefore = function(date) {
    return matchers.toBeDate.call(this) && matchers.toBeDate.call({ actual: date }) && this.actual.getTime() < date.getTime();
  };

  /**
   * @alias
   * module:Dates.toBeAfter
   *
   * @description
   * <p>Assert subject is a Date occurring after another Date.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeAfter = function(date) {
    return matchers.toBeBefore.call({ actual: date }, this.actual);
  };

  /**
   * @module Errors
   */

  /**
   * @alias
   * module:Errors.toThrowError
   *
   * @description
   * <p>Asserts subject throws an Error of any type.
   * <p>See {@link http://git.io/jasmine-error-testing|Unit testing Errors with Jasmine}.
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
   * module:Errors.toThrowErrorOfType
   *
   * @description
   * <p>Asserts subject throws an Error of a specific type, such as "TypeError".
   * <p>See {@link http://git.io/jasmine-error-testing|Unit testing Errors with Jasmine}.
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
   * @module Numbers
   */

  /**
   * @alias
   * module:Numbers.toBeNumber
   *
   * @description
   * <p>Assert subject is not only calculable, but an actual Number
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * @alias
   * module:Numbers.toBeEvenNumber
   *
   * @description
   * <p>Assert subject is an even Number.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * @alias
   * module:Numbers.toBeOddNumber
   *
   * @description
   * <p>Assert subject is an odd Number.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * @alias
   * module:Numbers.toBeCalculable
   *
   * @description
   * <p>Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   *
   * @example
   * // If all strings are numeric, JavaScript will cast them all as Numbers.
   * "1" * "2" === 2 (pass)
   *
   * @example
   * // If any string is not numeric, JavaScript will cast them all as Strings.
   * "wut?" * 2 === NaN (fail)
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };

  /**
   * @alias
   * module:Numbers.toBeWithinRange
   *
   * @description
   * <p>Assert value falls on or between floor and ceiling.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
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
   * module:Numbers.toBeWholeNumber
   *
   * @description
   * <p>Assert value is a number with no decimal places.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWholeNumber = function() {
    return matchers.toBeNumber.call(this) && (this.actual === 0 || this.actual % 1 === 0);
  };

  /**
   * @module Objects
   */

  /**
   * @inner
   *
   * @description
   * <p>Report how many instance members the given Object has.
   *
   * @param  {Object} object
   * @return {Number}
   * @memberOf priv
   */
  priv.countMembers = function(object) {
    return priv.reduce(object, function(memo, el, ix) {
      return memo + 1;
    }, 0);
  };

  /**
   * @alias
   * module:Objects.toBeObject
   *
   * @description
   * <p>Assert subject is a true Object, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeObject = function() {
    return this.actual instanceof Object;
  };

  /**
   * @alias
   * module:Objects.toBeEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object with no instance members.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) === 0;
  };

  /**
   * @alias
   * module:Objects.toBeNonEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object with at least one instance member.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) > 0;
  };

  /**
   * @alias
   * module:Objects.toImplement
   *
   * @description
   * <p>Assert subject is a true Object which features at least the same keys as `other` (regardless of
   * whether it also has other members).
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
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
   * module:Objects.toBeFunction
   *
   * @description
   * <p>Assert subject is a true Function, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFunction = function() {
    return this.actual instanceof Function;
  };

  /**
   * @module Strings
   */

  /**
   * @alias
   * module:Strings.toBeString
   *
   * @description
   * <p>Assert subject is a String.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeString = function() {
    return priv.is(this.actual, 'String');
  };

  /**
   * @alias
   * module:Strings.toBeEmptyString
   *
   * @description
   * <p>Assert subject is a String of length 0.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyString = function() {
    return this.actual === '';
  };

  /**
   * @alias
   * module:Strings.toBeNonEmptyString
   *
   * @description
   * <p>Assert subject is a String with at least 1 character.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyString = function() {
    return matchers.toBeString.call(this) && this.actual.length > 0;
  };

  /**
   * @alias
   * module:Strings.toBeHtmlString
   *
   * @description
   * <p>Assert subject is string containing HTML Markup.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeJsonString
   *
   * @description
   * <p>Assert subject is string containing parseable JSON.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeWhitespace
   *
   * @description
   * <p>Assert subject is a String containing nothing but whitespace.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWhitespace = function() {
    return matchers.toBeString.call(this) && this.actual.search(/\S/) === -1;
  };

  /**
   * @alias
   * module:Strings.toStartWith
   *
   * @description
   * <p>Assert subject is a String whose first characters match our expected string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toEndWith
   *
   * @description
   * <p>Assert subject is a String whose last characters match our expected string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeLongerThan
   *
   * @description
   * <p>Assert subject is a String whose length is greater than our other string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeShorterThan
   *
   * @description
   * <p>Assert subject is a String whose length is greater than our other string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:Strings.toBeSameLengthAs
   *
   * @description
   * <p>Assert subject is a String whose length is equal to our other string.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @module ArrayMembers
   */

  /**
   * @alias
   * module:ArrayMembers.toHaveArray
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeArray', memberName);
  };

  /**
   * @alias
   * module:ArrayMembers.toHaveArrayOfBooleans
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfBooleans = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfBooleans', memberName);
  };

  /**
   * @alias
   * module:ArrayMembers.toHaveArrayOfNumbers
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfNumbers = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfNumbers', memberName);
  };

  /**
   * @alias
   * module:ArrayMembers.toHaveArrayOfObjects
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfObjects = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfObjects', memberName);
  };

  /**
   * @alias
   * module:ArrayMembers.toHaveArrayOfSize
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
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
   * module:ArrayMembers.toHaveNonEmptyArray
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyArray', memberName);
  };

  /**
   * @alias
   * module:ArrayMembers.toHaveEmptyArray
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyArray', memberName);
  };

  /**
   * @alias
   * module:ArrayMembers.toHaveArrayOfStrings
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfStrings = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfStrings', memberName);
  };

  /**
   * @module BooleanMembers
   */

  /**
   * @alias
   * module:BooleanMembers.toHaveBoolean
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveBoolean = function(memberName) {
    return priv.assertMember.call(this, 'toBeBoolean', memberName);
  };

  /**
   * @alias
   * module:BooleanMembers.toHaveFalse
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveFalse = function(memberName) {
    return priv.assertMember.call(this, 'toBeFalse', memberName);
  };

  /**
   * @alias
   * module:BooleanMembers.toHaveTrue
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveTrue = function(memberName) {
    return priv.assertMember.call(this, 'toBeTrue', memberName);
  };

  /**
   * @module BrowserMembers
   */

  /**
   * @alias
   * module:BrowserMembers.toBeHtmlNode
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is an HTML Element.
   * <p>See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlNode', memberName);
  };

  /**
   * @module DateMembers
   */

  /**
   * @alias
   * module:DateMembers.toHaveDate
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveDate = function(memberName) {
    return priv.assertMember.call(this, 'toBeDate', memberName);
  };

  /**
   * @alias
   * module:DateMembers.toHaveDateAfter
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-bdate-testing|Unit testing Dates with Jasmine}.
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
   * module:DateMembers.toHaveDateBefore
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-browser-date|Unit testing Browsers with Dates}.
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
   * module:DateMembers.toHaveIso8601
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveIso8601 = function(memberName) {
    return priv.assertMember.call(this, 'toBeIso8601', memberName);
  };

  /**
   * @module NumberMembers
   */

  /**
   * @alias
   * module:NumberMembers.toHaveNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveNumberWithinRange
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
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
   * module:NumberMembers.toHaveCalculable
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveCalculable = function(memberName) {
    return priv.assertMember.call(this, 'toBeCalculable', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveEvenNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEvenNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeEvenNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveOddNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveOddNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeOddNumber', memberName);
  };

  /**
   * @alias
   * module:NumberMembers.toHaveWholeNumber
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWholeNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeWholeNumber', memberName);
  };

  /**
   * @module ObjectMembers
   */

  /**
   * @alias
   * module:ObjectMembers.toHaveMethod
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a Function.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMethod = function(memberName) {
    return priv.assertMember.call(this, 'toBeFunction', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveObject
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a true Object.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeObject', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a true Object with
   * no instance members.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyObject', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveNonEmptyObject
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is a true Object with
   * at least one instance member.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyObject', memberName);
  };

  /**
   * @alias
   * module:ObjectMembers.toHaveMember
   *
   * @description
   * <p>Assert subject is a true Object containing a property at memberName which is of any value,
   * including undefined.
   * <p>See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMember = function(memberName) {
    return memberName && priv.is(this.actual, 'Object') && memberName in this.actual;
  };

  /**
   * @module StringMembers
   */

  /**
   * @alias
   * module:StringMembers.toHaveEmptyString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveHtmlString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlString = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveJsonString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveJsonString = function(memberName) {
    return priv.assertMember.call(this, 'toBeJsonString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveNonEmptyString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveString = function(memberName) {
    return priv.assertMember.call(this, 'toBeString', memberName);
  };

  /**
   * @alias
   * module:StringMembers.toHaveStringLongerThan
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:StringMembers.toHaveStringSameLengthAs
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:StringMembers.toHaveStringShorterThan
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * module:StringMembers.toHaveWhitespaceString
   *
   * @description
   * <p>.
   * <p>See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWhitespaceString = function(memberName) {
    return priv.assertMember.call(this, 'toBeWhitespace', memberName);
  };

  // Create adapters for the original matchers so they can be compatible with Jasmine 2.0.

  switch (jasmineVersion) {
    case 1:
      beforeEach(function() {
        this.addMatchers(matchers);
      });
      break;
    case 2:
      beforeEach(function() {
        jasmine.addMatchers(priv.adaptMatchers(matchers));
      });
      break;
  }

}());
