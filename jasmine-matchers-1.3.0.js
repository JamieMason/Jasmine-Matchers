/*
 * Copyright © 2012 Jamie Mason, @GotNoSugarBaby, https://github.com/JamieMason
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

beforeEach(function() {

  /**
   * Assert subject is of type
   * @param  {Mixed} subject
   * @param  {String} type
   * @return {Boolean}
   */
  function is(subject, type) {
    return Object.prototype.toString.call(subject) === '[object ' + type + ']';
  }

  /**
   * Assert subject is an HTML Element with the given node type
   * @return {Boolean}
   */
  function isHtmlElementOfType(subject, type) {
    return subject && subject.nodeType === type;
  }

  /* Arrays
   * ==================================================== */

  /**
   * Assert subject is an Array from this document (Arrays from iframes etc won't match)
   * @return {Boolean}
   */
  function toBeArray() {
    return this.actual instanceof Array;
  }

  /**
   * Assert subject is an Array with a defined number of members
   * @param  {Number} size
   * @return {Boolean}
   */
  function toBeArrayOfSize(size) {
    return toBeArray.call(this) && this.actual.length === size;
  }

  /**
   * Assert subject is an Array with at least one member
   * @return {Boolean}
   */
  function toBeNonEmptyArray() {
    return toBeArray.call(this) && this.actual.length > 0;
  }

  /* Booleans
    * ==================================================== */

  /**
   * Assert subject is not only truthy or falsy, but an actual Boolean
   * @return {Boolean}
   */
  function toBeBoolean() {
    return toBeTrue.call(this) || toBeFalse.call(this);
  }

  /**
   * Assert subject is not only truthy, but an actual Boolean
   * @return {Boolean}
   */
  function toBeTrue() {
    return this.actual === true;
  }

  /**
   * Assert subject is not only falsy, but an actual Boolean
   * @return {Boolean}
   */
  function toBeFalse() {
    return this.actual === false;
  }

  /* Browser
    * ==================================================== */

  /**
   * Assert subject is the window global
   * @return {Boolean}
   */
  function toBeWindow() {
    return typeof window !== 'undefined' && this.actual === window;
  }

  /**
   * Assert subject is the document global
   * @return {Boolean}
   */
  function toBeDocument() {
    return typeof document !== 'undefined' && this.actual === document;
  }

  /**
   * Assert subject is an HTML Element
   * @return {Boolean}
   */
  function toBeHtmlNode() {
    return isHtmlElementOfType(this.actual, 1);
  }

  /**
   * Assert subject is an HTML Text Element
   * @return {Boolean}
   */
  function toBeHtmlTextNode() {
    return isHtmlElementOfType(this.actual, 3);
  }

  /**
   * Assert subject is an HTML Text Element
   * @return {Boolean}
   */
  function toBeHtmlCommentNode() {
    return isHtmlElementOfType(this.actual, 8);
  }

  /* Strings
    * ==================================================== */

  /**
   * Assert subject is a String
   * @return {Boolean}
   */
  function toBeString() {
    return is(this.actual, 'String');
  }

  /**
   * @return {Boolean}
   */
  function toBeEmptyString() {
    return this.actual === '';
  }

  /**
   * @return {Boolean}
   */
  function toBeNonEmptyString() {
    return toBeString.call(this) && this.actual.length > 0;
  }

  /**
   * Assert subject is string containing HTML Markup
   * @return {Boolean}
   */
  function toBeHtmlString() {
    return toBeString.call(this) && this.actual.search(/<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)/) !== -1;
  }

  /**
   * Assert subject is a String containing nothing but whitespace
   * @return {Boolean}
   */
  function toBeWhitespace() {
    return is(this.actual, 'String') && this.actual.search(/\S/) === -1;
  }

  /* Numbers
    * ==================================================== */

  /**
   * Assert subject is not only calculable, but an actual Number
   * @return {Boolean}
   */
  function toBeNumber() {
    return !isNaN(parseFloat(this.actual)) && !is(this.actual, 'String');
  }

  /**
   * Assert subject is an even Number
   * @return {Boolean}
   */
  function toBeEvenNumber() {
    return toBeNumber.call(this) && this.actual % 2 === 0;
  }

  /**
   * Assert subject is an odd Number
   * @return {Boolean}
   */
  function toBeOddNumber() {
    return toBeNumber.call(this) && this.actual % 2 !== 0;
  }

  /**
   * Assert subject can be used in Mathemetic calculations, despite not being an actual Number.
   * @example "1" * "2" === 2 (pass)
   * @example "wut?" * "2" === NaN (fail)
   * @return {Boolean}
   */
  function toBeCalculable() {
    return !isNaN(this.actual * 2);
  }

  /* Objects
    * ==================================================== */

  /**
   * Assert subject is an Object, and not null
   * @return {Boolean}
   */
  function toBeObject() {
    return this.actual instanceof Object;
  }

  /**
   * Assert subject features the same public members as api.
   * @param  {Object|Array} api
   * @return {Boolean}
   */
  function toImplement(api) {
    if(!this.actual || !api) {
      return false;
    }
    for(var required in api) {
      if((required in this.actual) === false) {
        return false;
      }
    }
    return true;
  }

  /**
   * Assert subject is a function
   * @return {Boolean}
   */
  function toBeFunction() {
    return this.actual instanceof Function;
  }

  /* Errors
    * ==================================================== */

  /**
   * Asserts subject throws an Error of any type
   * @return {Boolean}
   */
  function toThrowError() {
    var threwError = false;
    try {
      this.actual();
    } catch(e) {
      threwError = true;
    }
    return threwError;
  }

  /**
   * Asserts subject throws an Error of a specific type, such as 'TypeError'
   * @param  {String} type
   * @return {Boolean}
   */
  function toThrowErrorOfType(type) {
    var threwErrorOfType = false;
    try {
      this.actual();
    } catch(e) {
      threwErrorOfType = (e.name === type);
    }
    return threwErrorOfType;
  }

  /* Other
    * ==================================================== */

  /**
   * Assert subject is a Date
   * @return {Boolean}
   */
  function toBeDate() {
    return this.actual instanceof Date;
  }

  this.addMatchers({
    toBeArray: toBeArray,
    toBeArrayOfSize: toBeArrayOfSize,
    toBeNonEmptyArray: toBeNonEmptyArray,
    toBeTrue: toBeTrue,
    toBeFalse: toBeFalse,
    toBeBoolean: toBeBoolean,
    toBeWindow: toBeWindow,
    toBeDocument: toBeDocument,
    toBeHtmlCommentNode: toBeHtmlCommentNode,
    toBeHtmlNode: toBeHtmlNode,
    toBeHtmlTextNode: toBeHtmlTextNode,
    toBeEmptyString: toBeEmptyString,
    toBeNonEmptyString: toBeNonEmptyString,
    toBeString: toBeString,
    toBeHtmlString: toBeHtmlString,
    toBeWhitespace: toBeWhitespace,
    toBeNumber: toBeNumber,
    toBeCalculable: toBeCalculable,
    toBeEvenNumber: toBeEvenNumber,
    toBeOddNumber: toBeOddNumber,
    toBeFunction: toBeFunction,
    toBeObject: toBeObject,
    toImplement: toImplement,
    toThrowError: toThrowError,
    toThrowErrorOfType: toThrowErrorOfType,
    toBeDate: toBeDate
  });
});
