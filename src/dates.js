/**
 * @alias    toBeDate
 * @summary  <code>expect(date).toBeDate();</code>
 */
matchers.toBeDate = function() {
  return this.actual instanceof Date;
};

/**
 * @alias    toBeIso8601
 * @summary  <code>expect(string).toBeIso8601();</code>
 */
matchers.toBeIso8601 = function() {
  return matchers.toBeString.call(this) &&
    this.actual.length >= 10 &&
    new Date(this.actual).toString() !== 'Invalid Date' &&
    new Date(this.actual)
    .toISOString()
    .slice(0, this.actual.length) === this.actual;
};

/**
 * @alias    toBeBefore
 * @summary  <code>expect(date).toBeBefore(date);</code>
 */
matchers.toBeBefore = function(date) {
  return matchers.toBeDate.call(this) &&
    matchers.toBeDate.call({
      actual: date
    }) &&
    this.actual.getTime() < date.getTime();
};

/**
 * @alias    toBeAfter
 * @summary  <code>expect(date).toBeAfter(date);</code>
 */
matchers.toBeAfter = function(date) {
  return matchers.toBeBefore.call({
    actual: date
  }, this.actual);
};
