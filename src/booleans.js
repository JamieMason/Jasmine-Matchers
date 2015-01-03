/**
 * @alias    toBeBoolean
 * @summary  <code>expect(boolean).toBeBoolean();</code>
 */
matchers.toBeBoolean = function() {
  return matchers.toBeTrue.call(this) ||
    matchers.toBeFalse.call(this);
};

/**
 * @alias    toBeTrue
 * @summary  <code>expect(boolean).toBeTrue();</code>
 */
matchers.toBeTrue = function() {
  return this.actual === true ||
    this.actual instanceof Boolean &&
    this.actual.valueOf() === true;
};

/**
 * @alias    toBeFalse
 * @summary  <code>expect(boolean).toBeFalse();</code>
 */
matchers.toBeFalse = function() {
  return this.actual === false ||
    this.actual instanceof Boolean &&
    this.actual.valueOf() === false;
};
