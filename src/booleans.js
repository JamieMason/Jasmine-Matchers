  // Booleans
  // ---------------------------------------------------------------------------

  /**
   * @name toBeBoolean
   *
   * @description
   * Assert subject is not only truthy or falsy, but an actual Boolean.
   *
   * @example
   * expect(true).toBeBoolean();
   * expect(false).toBeBoolean();
   * expect(1).not.toBeBoolean();
   * expect(0).not.toBeBoolean();
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
   * expect(true).toBeTrue();
   * expect(1).not.toBeTrue();
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
   * expect(false).toBeFalse();
   * expect(0).not.toBeFalse();
   *
   * @return {Boolean}
   */
  matchers.toBeFalse = function() {
    return this.actual === false || this.actual instanceof Boolean && this.actual.valueOf() === false;
  };
