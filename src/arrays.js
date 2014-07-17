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
   * expect(["Foo", "Bar"]).toBeArray();
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
   * expect(["Foo", "Bar"]).toBeArrayOfSize(2);
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
   * expect([]).toBeEmptyArray();
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
   * expect(["Foo", "Bar"]).toBeNonEmptyArray();
   *
   * @example
   * expect([]).not.toBeNonEmptyArray();
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
   * expect([{}, {}]).toBeArrayOfObjects();
   *
   * @example
   * // An empty Array of Objects is still considered valid .
   * expect([]).toBeArrayOfObjects();
   *
   * @example
   * // Although this Array contains Objects, it also contains other data types so is not
   * considered valid.
   * expect([{}, 12, {}]).not.toBeArrayOfObjects();
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
   * expect(["foo", ""]).toBeArrayOfStrings();
   *
   * @example
   * // An empty Array of Strings is still considered valid .
   * expect([]).toBeArrayOfStrings();
   *
   * @example
   * // Although this Array contains Strings, it also contains other data types so is not
   * considered valid.
   * expect(["Governor", 12, "Marley"]).not.toBeArrayOfStrings();
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
   * expect([23, 98]).toBeArrayOfNumbers();
   *
   * @example
   * // An empty Array of Numbers is still considered valid .
   * expect([]).toBeArrayOfNumbers();
   *
   * @example
   * // Although this Array contains Numbers, it also contains other data types so is not
   * considered valid.
   * expect([67, 38, {}]).not.toBeArrayOfNumbers();
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
   * expect([true, false]).toBeArrayOfBooleans();
   *
   * @example
   * // An empty Array of Booleans is still considered valid .
   * expect([]).toBeArrayOfOBooleans);
   *
   * @example
   * // Although this Array contains Booleans, it also contains other data types so is not
   * considered valid.
   * expect([true, false, null).not.toBeArrayOfBooleans();
   *
   * @return {Boolean}
   */
  matchers.toBeArrayOfBooleans = priv.createToBeArrayOfXsMatcher('toBeBoolean');
