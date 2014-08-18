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
