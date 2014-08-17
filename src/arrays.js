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
