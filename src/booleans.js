/**
 * @alias    toBeTrue
 * @summary  <code>expect(boolean).toBeTrue();</code>
 */
matchers.toBeTrue = function() {
  return this.actual === true ||
    priv.is(this.actual, 'Boolean') &&
    this.actual.valueOf();
};

/**
 * @alias    toBeFalse
 * @summary  <code>expect(boolean).toBeFalse();</code>
 */
matchers.toBeFalse = function() {
  return this.actual === false ||
    priv.is(this.actual, 'Boolean') &&
    !this.actual.valueOf();
};

/**
 * @alias    toBeBoolean
 * @summary  <code>expect(boolean).toBeBoolean();</code>
 */
matchers.toBeBoolean = function() {
  return priv.is(this.actual, 'Boolean');
};
