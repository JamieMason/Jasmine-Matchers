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

  var matchers = {};
  var priv = {};

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
   * @name toBeArray
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
   * @name toBeArrayOfSize
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
   * @name toBeEmptyArray
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
   * @name toBeNonEmptyArray
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
   * @name toBeArrayOfObjects
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
   * @name toBeArrayOfStrings
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
   * @name toBeArrayOfNumbers
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
   * @name toBeArrayOfBooleans
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
   * @name toHaveArray
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
   * @name toHaveArrayOfBooleans
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
   * @name toHaveArrayOfNumbers
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
   * @name toHaveArrayOfObjects
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
   * @name toHaveArrayOfSize
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
   * @name toHaveNonEmptyArray
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
   * @name toHaveEmptyArray
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
   * @name toHaveArrayOfStrings
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
   * @name toBeBoolean
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
   * @name toBeTrue
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
   * @name toBeFalse
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
   * @name toHaveBoolean
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
   * @name toHaveFalse
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
   * @name toHaveTrue
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
   * @name toBeWindow
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
   * @name toBeDocument
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
   * @name toBeHtmlNode
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
   * @name toBeHtmlTextNode
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
   * @name toBeHtmlCommentNode
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
   * @name toBeHtmlNode
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
   * @name toBeDate
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
   * @name toBeIso8601
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
   * @name toBeBefore
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
   * @name toBeAfter
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
   * @name toHaveDate
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
   * @name toHaveDateAfter
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
   * @name toHaveDateBefore
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
   * @name toHaveIso8601
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
   * @name toThrowError
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
   * @name toThrowErrorOfType
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
   * @name toBeNumber
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
   * @name toBeEvenNumber
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
   * @name toBeOddNumber
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
   * @name toBeCalculable
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
   * @name toBeWithinRange
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
   * @name toBeWholeNumber
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
   * @name toHaveNumber
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
   * @name toHaveNumberWithinRange
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
   * @name toHaveCalculable
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
   * @name toHaveEvenNumber
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
   * @name toHaveOddNumber
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
   * @name toHaveWholeNumber
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
   * @name toBeObject
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
   * @name toBeEmptyObject
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
   * @name toBeNonEmptyObject
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
   * @name toImplement
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
   * @name toBeFunction
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
   * @name toHaveMethod
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
   * @name toHaveObject
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
   * @name toHaveEmptyObject
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
   * @name toHaveNonEmptyObject
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
   * @name toHaveMember
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
   * @name toBeString
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
   * @name toBeEmptyString
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
   * @name toBeNonEmptyString
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
   * @name toBeHtmlString
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
   * @name toBeJsonString
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
   * @name toBeWhitespace
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
   * @name toStartWith
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
   * @name toEndWith
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
   * @name toBeLongerThan
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
   * @name toBeShorterThan
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
   * @name toBeSameLengthAs
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
   * @name toHaveEmptyString
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
   * @name toHaveHtmlString
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
   * @name toHaveJsonString
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
   * @name toHaveNonEmptyString
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
   * @name toHaveString
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
   * @name toHaveStringLongerThan
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
   * @name toHaveStringSameLengthAs
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
   * @name toHaveStringShorterThan
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
   * @name toHaveWhitespaceString
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

  var isJasmineV1 = typeof this.addMatchers === 'function';
  var isJasmineV2 = typeof jasmine.addMatchers === 'function';
  var v2Matchers = {};

  if (isJasmineV1) {
    this.addMatchers(matchers);
  } else if (isJasmineV2) {
    priv.each(matchers, function(fn, matcherName) {
      v2Matchers[matcherName] = function(util) {
        return {
          compare: function(actual /*, expected, ...*/ ) {

            var message;
            var memberName;
            var args = priv.toArray(arguments).slice(1);
            var pass = matchers[matcherName].apply({
              actual: actual
            }, args);

            if (matcherName.search(/^toHave/) !== -1) {
              memberName = args.shift();
              message = util.buildFailureMessage.apply(null, [matcherName, pass, actual].concat(args));
              message = message.replace('Expected', 'Expected member "' + memberName + '" of');
              message = message.replace(' to have ', ' to be ');
            } else {
              message = util.buildFailureMessage.apply(null, [matcherName, pass, actual].concat(args));
            }

            return {
              pass: pass,
              message: message
            };

          }
        };
      };
    });
    jasmine.addMatchers(v2Matchers);
  }

});
