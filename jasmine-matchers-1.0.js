// Copyright © 2012 Jamie Mason, @GotNoSugarBaby, https://github.com/jamiemason
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/*global beforeEach*/

beforeEach(function() {

  function typeOf (actual, type) {
    return Object.prototype.toString.call(actual) === "[object " + type + "]";
  }

  this.addMatchers({

    /**
     * Does not return true if subject is null
     * @return {Boolean}
     */
    toBeObject: function() {
      return typeOf(this.actual, 'Object');
    },

    /**
     * Asserts both Objects have the same public members
     * @param  {Object} candidate
     * @return {Boolean}
     */
    toBeCloneOf: function(candidate) {
      var sKey;
      if (!typeOf(this.actual, 'Object') || !typeOf(candidate, 'Object')) {
        return false;
      }
      for (sKey in this.actual) {
        if (candidate[sKey] !== this.actual[sKey]) {
          return false;
        }
      }
      return true;
    },

    /**
     * @return {Boolean}
     */
    toBeArray: function() {
      return typeOf(this.actual, 'Array');
    },

    /**
     * Asserts subject is an Array with a defined number of members
     * @param  {Number} size
     * @return {Boolean}
     */
    toBeArrayOfSize: function(size) {
      return typeOf(this.actual, 'Array') && this.actual.length === size;
    },

    /**
     * @return {Boolean}
     */
    toBeString: function() {
      return typeOf(this.actual, 'String');
    },

    /**
     * @return {Boolean}
     */
    toBeBoolean: function() {
      return typeOf(this.actual, 'Boolean');
    },

    /**
     * Asserts subject is not only truthy, but a proper Boolean
     * @return {Boolean}
     */
    toBeTrue: function() {
      return this.actual === true;
    },

    /**
     * Asserts subject is not only falsy, but a proper Boolean
     * @return {Boolean}
     */
    toBeFalse: function() {
      return this.actual === false;
    },

    /**
     * @return {Boolean}
     */
    toBeNonEmptyString: function() {
      return typeOf(this.actual, 'String') && this.actual.length > 0;
    },

    /**
     * @return {Boolean}
     */
    toBeNumber: function() {
      return !isNaN(parseFloat(this.actual)) && !typeOf(this.actual, 'String');
    },

    /**
     * @return {Boolean}
     */
    toBeFunction: function() {
      return typeOf(this.actual, 'Function');
    },

    /**
     * Asserts subject throws an Error of any type
     * @return {Boolean}
     */
    toThrowError: function() {
      var threwError = false;
      try {
        this.actual();
      } catch (e) {
        threwError = true;
      }
      return threwError;
    },

    /**
     * Asserts subject throws an Error of a specific type, such as 'TypeError'
     * @param  {String} type
     * @return {Boolean}
     */
    toThrowErrorOfType: function(type) {
      var threwErrorOfType = false;
      try {
        this.actual();
      } catch (e) {
        threwErrorOfType = (e.name === type);
      }
      return threwErrorOfType;
    }
  });
});
