/**
 * @file Booleans
 *
 * @description
 * See {@link http://git.io/jasmine-boolean-testing|Unit testing Booleans with Jasmine}.
 */

/**
 * @alias
 * expect(boolean):toBeBoolean
 *
 * @summary
 * Assert subject is not only truthy or falsy, but an actual Boolean.
 *
 * @return {Boolean}
 */
matchers.toBeBoolean = function() {
  return matchers.toBeTrue.call(this) || matchers.toBeFalse.call(this);
};

/**
 * @alias
 * expect(boolean):toBeTrue
 *
 * @summary
 * Assert subject is not only truthy, but an actual Boolean true.
 *
 * @return {Boolean}
 */
matchers.toBeTrue = function() {
  return this.actual === true || this.actual instanceof Boolean && this.actual.valueOf() === true;
};

/**
 * @alias
 * expect(boolean):toBeFalse
 *
 * @summary
 * Assert subject is not only falsy, but an actual Boolean false.
 *
 * @return {Boolean}
 */
matchers.toBeFalse = function() {
  return this.actual === false || this.actual instanceof Boolean && this.actual.valueOf() === false;
};
