  // Arrays
  // ---------------------------------------------------------------------------

  /**
   * Assert subject is an Array (from this document, eg Arrays from iframes
   * or popups won't match)
   * @return {Boolean}
   */
  matchers.toBeArray = function () {
    return this.actual instanceof Array;
  };

  /**
   * Assert subject is an Array with a defined number of members
   * @param  {Number} size
   * @return {Boolean}
   */
  matchers.toBeArrayOfSize = function (size) {
    return matchers.toBeArray.call(this) && this.actual.length === size;
  };

  /**
   * Assert subject is an Array, but with no members
   * @return {Boolean}
   */
  matchers.toBeEmptyArray = function () {
    return matchers.toBeArrayOfSize.call(this, 0);
  };

  /**
   * Assert subject is an Array with at least one member
   * @return {Boolean}
   */
  matchers.toBeNonEmptyArray = function () {
    return matchers.toBeArray.call(this) && this.actual.length > 0;
  };

  /**
   * Assert subject is an Array which is either empty or contains only Objects
   * @return {Boolean}
   */
  matchers.toBeArrayOfObjects = function () {
    return matchers.toBeArray.call(this) && priv.expectAllMembers.call(this, 'toBeObject');
  };
