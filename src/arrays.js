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
      return matchers.toBeArray.call(this) && priv.expectAllMembers.call(this, toBeX);
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
    return matchers.toBeArray.call(this) && this.actual.length === size;
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
    return matchers.toBeArray.call(this) && this.actual.length > 0;
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
