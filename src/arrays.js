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
