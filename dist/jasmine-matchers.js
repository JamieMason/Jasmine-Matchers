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

beforeEach(function() {

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
   * @param  {Array} array
   * @param  {Function} fn
   */
  priv.each = function(array, fn) {
    var i;
    var len = array.length;
    if ('length' in array) {
      for (i = 0; i < len; i++) {
        fn.call(this, array[i], i, array);
      }
    } else {
      for (i in array) {
        if (array.hasOwnProperty(i)) {
          fn.call(this, array[i], i, array);
        }
      }
    }
  };

  /**
   * @inner
   * @param  {Array} array
   * @param  {Function} fn
   * @param  {*} memo
   * @return {*} memo
   */
  priv.reduce = function(array, fn, memo) {
    priv.each.call(this, array, function(el, ix, list) {
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
   * @param  {Array} array
   * @param  {Function} fn
   * @return {Boolean}
   */
  priv.some = function(array, fn) {
    var i;
    var len = array.length;
    for (i = 0; i < len; i++) {
      if (fn.call(this, array[i], i, array) === true) {
        return true;
      }
    }
    return false;
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
   * @description
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

  // Arrays
  // ---------------------------------------------------------------------------

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
   * @alias toBeArray
   *
   * @description
   * Assert subject is a true Array, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArray = function() {
    return this.actual instanceof Array;
  };

  /**
   * @alias toBeArrayOfSize
   *
   * @description
   * Assert subject is not only a true Array, but one with a specific number of members.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param {Number} size
   * @return {Boolean}
   */
  matchers.toBeArrayOfSize = function(size) {
    return priv.is(this.actual, 'Array') && this.actual.length === size;
  };

  /**
   * @alias toBeEmptyArray
   *
   * @description
   * Assert subject is not only a true Array, but one without any members.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyArray = function() {
    return matchers.toBeArrayOfSize.call(this, 0);
  };

  /**
   * @alias toBeNonEmptyArray
   *
   * @description
   * Assert subject is not only a true Array, but one with at least one member.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyArray = function() {
    return priv.is(this.actual, 'Array') && this.actual.length > 0;
  };

  /**
   * @alias toBeArrayOfObjects
   *
   * @description
   * Assert subject is an Array which is either empty or contains only Objects.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfObjects = priv.createToBeArrayOfXsMatcher('toBeObject');

  /**
   * @alias toBeArrayOfStrings
   *
   * @description
   * Assert subject is an Array which is either empty or contains only Strings.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfStrings = priv.createToBeArrayOfXsMatcher('toBeString');

  /**
   * @alias toBeArrayOfNumbers
   *
   * @description
   * Assert subject is an Array which is either empty or contains only Numbers.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfNumbers = priv.createToBeArrayOfXsMatcher('toBeNumber');

  /**
   * @alias toBeArrayOfBooleans
   *
   * @description
   * Assert subject is an Array which is either empty or contains only Booleans.
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfBooleans = priv.createToBeArrayOfXsMatcher('toBeBoolean');

  // Array Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveArray
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeArray', memberName);
  };

  /**
   * @alias toHaveArrayOfBooleans
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfBooleans = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfBooleans', memberName);
  };

  /**
   * @alias toHaveArrayOfNumbers
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfNumbers = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfNumbers', memberName);
  };

  /**
   * @alias toHaveArrayOfObjects
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfObjects = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfObjects', memberName);
  };

  /**
   * @alias toHaveArrayOfSize
   *
   * @description
   * .
   *
   * @example
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
   * @alias toHaveNonEmptyArray
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyArray', memberName);
  };

  /**
   * @alias toHaveEmptyArray
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyArray = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyArray', memberName);
  };

  /**
   * @alias toHaveArrayOfStrings
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-array-testing|Unit testing Arrays with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveArrayOfStrings = function(memberName) {
    return priv.assertMember.call(this, 'toBeArrayOfStrings', memberName);
  };

  // Booleans
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeBoolean
   *
   * @description
   * Assert subject is not only truthy or falsy, but an actual Boolean.
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeBoolean = function() {
    return matchers.toBeTrue.call(this) || matchers.toBeFalse.call(this);
  };

  /**
   * @alias toBeTrue
   *
   * @description
   * Assert subject is not only truthy, but an actual Boolean true.
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeTrue = function() {
    return this.actual === true || this.actual instanceof Boolean && this.actual.valueOf() === true;
  };

  /**
   * @alias toBeFalse
   *
   * @description
   * Assert subject is not only falsy, but an actual Boolean false.
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFalse = function() {
    return this.actual === false || this.actual instanceof Boolean && this.actual.valueOf() === false;
  };

  // Boolean Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveBoolean
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveBoolean = function(memberName) {
    return priv.assertMember.call(this, 'toBeBoolean', memberName);
  };

  /**
   * @alias toHaveFalse
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveFalse = function(memberName) {
    return priv.assertMember.call(this, 'toBeFalse', memberName);
  };

  /**
   * @alias toHaveTrue
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveTrue = function(memberName) {
    return priv.assertMember.call(this, 'toBeTrue', memberName);
  };

  // Browser
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeWindow
   *
   * @description
   * Assert subject is a browser Window global, whether that be the parent window or those created
   * within iframes or other windows.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWindow = function() {
    return this.actual && typeof this.actual === 'object' && this.actual.window === this.actual;
  };

  /**
   * @alias toBeDocument
   *
   * @description
   * Assert subject is a browser Window global, whether that be the parent window or those created
   * within iframes or other windows.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDocument = function() {
    return this.actual && typeof this.actual === 'object' && this.actual instanceof window.HTMLDocument;
  };

  /**
   * @alias toBeHtmlNode
   *
   * @description
   * Assert subject is an HTML Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlNode = function() {
    return priv.isHtmlElementOfType(this.actual, 1);
  };

  /**
   * @alias toBeHtmlTextNode
   *
   * @description
   * Assert subject is an HTML Text Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlTextNode = function() {
    return priv.isHtmlElementOfType(this.actual, 3);
  };

  /**
   * @alias toBeHtmlCommentNode
   *
   * @description
   * Assert subject is an HTML Comment Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeHtmlCommentNode = function() {
    return priv.isHtmlElementOfType(this.actual, 8);
  };

  // Browser Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeHtmlNode
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is an HTML Element.
   *
   * @example
   * See {@link http://git.io/jasmine-browser-testing|Unit testing Browsers with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlNode = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlNode', memberName);
  };

  // Dates
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeDate
   *
   * @description
   * Assert subject is a true Date, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeDate = function() {
    return this.actual instanceof Date;
  };

  /**
   * @alias toBeIso8601
   *
   * @description
   * Assert subject is a Date String conforming to the ISO 8601 standard.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
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
   * @alias toBeBefore
   *
   * @description
   * Assert subject is a Date occurring before another Date.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeBefore = function(date) {
    return matchers.toBeDate.call(this) && matchers.toBeDate.call({ actual: date }) && this.actual.getTime() < date.getTime();
  };

  /**
   * @alias toBeAfter
   *
   * @description
   * Assert subject is a Date occurring after another Date.
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param {Date} date
   * @return {Boolean}
   */
  matchers.toBeAfter = function(date) {
    return matchers.toBeBefore.call({ actual: date }, this.actual);
  };

  // Date Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveDate
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveDate = function(memberName) {
    return priv.assertMember.call(this, 'toBeDate', memberName);
  };

  /**
   * @alias toHaveDateAfter
   *
   * @description
   * .
   *
   * @example
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
   * @alias toHaveDateBefore
   *
   * @description
   * .
   *
   * @example
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
   * @alias toHaveIso8601
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-date-testing|Unit testing Dates with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveIso8601 = function(memberName) {
    return priv.assertMember.call(this, 'toBeIso8601', memberName);
  };

  // Errors
  // ---------------------------------------------------------------------------

  /**
   * @alias toThrowError
   *
   * @description
   * Asserts subject throws an Error of any type.
   *
   * @example
   * See {@link http://git.io/jasmine-error-testing|Unit testing Errors with Jasmine}.
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
   * @alias toThrowErrorOfType
   *
   * @description
   * Asserts subject throws an Error of a specific type, such as "TypeError".
   *
   * @example
   * See {@link http://git.io/jasmine-error-testing|Unit testing Errors with Jasmine}.
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

  // Numbers
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeNumber
   *
   * @description
   * Assert subject is not only calculable, but an actual Number
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNumber = function() {
    return !isNaN(parseFloat(this.actual)) && !priv.is(this.actual, 'String');
  };

  /**
   * @alias toBeEvenNumber
   *
   * @description
   * Assert subject is an even Number.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEvenNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 === 0;
  };

  /**
   * @alias toBeOddNumber
   *
   * @description
   * Assert subject is an odd Number.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeOddNumber = function() {
    return matchers.toBeNumber.call(this) && this.actual % 2 !== 0;
  };

  /**
   * @alias toBeCalculable
   *
   * @description
   * Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   *
   * @example
   * // If all strings are numeric, JavaScript will cast them all as Numbers.
   * "1" * "2" === 2 (pass)
   *
   * @example
   * // If any string is not numeric, JavaScript will cast them all as Strings.
   * "wut?" * 2 === NaN (fail)
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeCalculable = function() {
    return !isNaN(this.actual * 2);
  };

  /**
   * @alias toBeWithinRange
   *
   * @description
   * Assert value falls on or between floor and ceiling.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param {Number} floor
   * @param {Number} ceiling
   * @return {Boolean}
   */
  matchers.toBeWithinRange = function(floor, ceiling) {
    return matchers.toBeNumber.call(this) && this.actual >= floor && this.actual <= ceiling;
  };

  /**
   * @alias toBeWholeNumber
   *
   * @description
   * Assert value is a number with no decimal places.
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWholeNumber = function() {
    return matchers.toBeNumber.call(this) && (this.actual === 0 || this.actual % 1 === 0);
  };

  // Number Methods
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeNumber', memberName);
  };

  /**
   * @alias toHaveNumberWithinRange
   *
   * @description
   * .
   *
   * @example
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
   * @alias toHaveCalculable
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveCalculable = function(memberName) {
    return priv.assertMember.call(this, 'toBeCalculable', memberName);
  };

  /**
   * @alias toHaveEvenNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEvenNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeEvenNumber', memberName);
  };

  /**
   * @alias toHaveOddNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveOddNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeOddNumber', memberName);
  };

  /**
   * @alias toHaveWholeNumber
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-number-testing|Unit testing Numbers with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveWholeNumber = function(memberName) {
    return priv.assertMember.call(this, 'toBeWholeNumber', memberName);
  };

  // Objects
  // ---------------------------------------------------------------------------

  /**
   * @inner
   *
   * @description
   * Report how many instance members the given Object has.
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
   * @alias toBeObject
   *
   * @description
   * Assert subject is a true Object, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeObject = function() {
    return this.actual instanceof Object;
  };

  /**
   * @alias toBeEmptyObject
   *
   * @description
   * Assert subject is a true Object with no instance members.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) === 0;
  };

  /**
   * @alias toBeNonEmptyObject
   *
   * @description
   * Assert subject is a true Object with at least one instance member.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyObject = function() {
    return priv.is(this.actual, 'Object') && priv.countMembers(this.actual) > 0;
  };

  /**
   * @alias toImplement
   *
   * @description
   * Assert subject is a true Object which features at least the same keys as `other` (regardless of
   * whether it also has other members).
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
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
   * @alias toBeFunction
   *
   * @description
   * Assert subject is a true Function, created in the parent document — those created and imported
   * from within iframes or other windows will not match.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeFunction = function() {
    return this.actual instanceof Function;
  };

  // Object Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveMethod
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a Function.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMethod = function(memberName) {
    return priv.assertMember.call(this, 'toBeFunction', memberName);
  };

  /**
   * @alias toHaveObject
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a true Object.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeObject', memberName);
  };

  /**
   * @alias toHaveEmptyObject
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a true Object with
   * no instance members.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyObject', memberName);
  };

  /**
   * @alias toHaveNonEmptyObject
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is a true Object with
   * at least one instance member.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyObject = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyObject', memberName);
  };

  /**
   * @alias toHaveMember
   *
   * @description
   * Assert subject is a true Object containing a property at memberName which is of any value,
   * including undefined.
   *
   * @example
   * See {@link http://git.io/jasmine-object-testing|Unit testing Objects with Jasmine}.
   *
   * @param {Boolean} memberName
   * @return {Boolean}
   */
  matchers.toHaveMember = function(memberName) {
    return memberName && priv.is(this.actual, 'Object') && memberName in this.actual;
  };

  // Strings
  // ---------------------------------------------------------------------------

  /**
   * @alias toBeString
   *
   * @description
   * Assert subject is a String.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeString = function() {
    return priv.is(this.actual, 'String');
  };

  /**
   * @alias toBeEmptyString
   *
   * @description
   * Assert subject is a String of length 0.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeEmptyString = function() {
    return this.actual === '';
  };

  /**
   * @alias toBeNonEmptyString
   *
   * @description
   * Assert subject is a String with at least 1 character.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeNonEmptyString = function() {
    return matchers.toBeString.call(this) && this.actual.length > 0;
  };

  /**
   * @alias toBeHtmlString
   *
   * @description
   * Assert subject is string containing HTML Markup.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @alias toBeJsonString
   *
   * @description
   * Assert subject is string containing parseable JSON.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @alias toBeWhitespace
   *
   * @description
   * Assert subject is a String containing nothing but whitespace.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @return {Boolean}
   */
  matchers.toBeWhitespace = function() {
    return matchers.toBeString.call(this) && this.actual.search(/\S/) === -1;
  };

  /**
   * @alias toStartWith
   *
   * @description
   * Assert subject is a String whose first characters match our expected string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @alias toEndWith
   *
   * @description
   * Assert subject is a String whose last characters match our expected string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @alias toBeLongerThan
   *
   * @description
   * Assert subject is a String whose length is greater than our other string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @alias toBeShorterThan
   *
   * @description
   * Assert subject is a String whose length is greater than our other string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
   * @alias toBeSameLengthAs
   *
   * @description
   * Assert subject is a String whose length is equal to our other string.
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} other
   * @return {Boolean}
   */
  matchers.toBeSameLengthAs = function(other) {
    return matchers.toBeString.call(this) && matchers.toBeString.call({
      actual: other
    }) && this.actual.length === other.length;
  };

  // String Members
  // ---------------------------------------------------------------------------

  /**
   * @alias toHaveEmptyString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeEmptyString', memberName);
  };

  /**
   * @alias toHaveHtmlString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveHtmlString = function(memberName) {
    return priv.assertMember.call(this, 'toBeHtmlString', memberName);
  };

  /**
   * @alias toHaveJsonString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveJsonString = function(memberName) {
    return priv.assertMember.call(this, 'toBeJsonString', memberName);
  };

  /**
   * @alias toHaveNonEmptyString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveNonEmptyString = function(memberName) {
    return priv.assertMember.call(this, 'toBeNonEmptyString', memberName);
  };

  /**
   * @alias toHaveString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
   *
   * @param  {String} memberName
   * @return {Boolean}
   */
  matchers.toHaveString = function(memberName) {
    return priv.assertMember.call(this, 'toBeString', memberName);
  };

  /**
   * @alias toHaveStringLongerThan
   *
   * @description
   * .
   *
   * @example
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
   * @alias toHaveStringSameLengthAs
   *
   * @description
   * .
   *
   * @example
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
   * @alias toHaveStringShorterThan
   *
   * @description
   * .
   *
   * @example
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
   * @alias toHaveWhitespaceString
   *
   * @description
   * .
   *
   * @example
   * See {@link http://git.io/jasmine-string-testing|Unit testing Strings with Jasmine}.
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
      this.addMatchers(matchers);
      break;
    case 2:
      jasmine.addMatchers(priv.adaptMatchers(matchers));
      break;
  }

});
