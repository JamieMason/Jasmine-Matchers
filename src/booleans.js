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
